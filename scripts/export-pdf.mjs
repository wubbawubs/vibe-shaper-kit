#!/usr/bin/env node
/**
 * Playwright PDF Export Script
 * 
 * Usage:
 *   node scripts/export-pdf.mjs [url] [output-filename]
 * 
 * Examples:
 *   node scripts/export-pdf.mjs "http://localhost:5173/pitch-deck" "OneRooted-PitchDeck.pdf"
 *   node scripts/export-pdf.mjs "http://localhost:5173/en/pitch-deck" "OneRooted-PitchDeck-EN.pdf"
 *   node scripts/export-pdf.mjs "http://localhost:5173/nl/pitch-deck" "OneRooted-PitchDeck-NL.pdf"
 * 
 * Requirements:
 *   - Run `npx playwright install chromium` first to install the browser
 *   - Your dev server must be running (npm run dev)
 */

import { chromium } from "playwright";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration
const A4_WIDTH = 794;  // A4 width in CSS pixels at 96 DPI
const A4_HEIGHT = 1123; // A4 height in CSS pixels at 96 DPI

async function exportPDF(url, outputPath) {
  console.log(`🚀 Starting PDF export...`);
  console.log(`   URL: ${url}`);
  console.log(`   Output: ${outputPath}`);

  const browser = await chromium.launch({
    headless: true,
  });

  const page = await browser.newPage({
    viewport: { width: A4_WIDTH, height: A4_HEIGHT },
    deviceScaleFactor: 2, // Higher quality
  });

  try {
    // Navigate to the page
    console.log(`📄 Loading page...`);
    await page.goto(url, { 
      waitUntil: "networkidle",
      timeout: 30000,
    });

    // Wait for fonts to load
    console.log(`🔤 Waiting for fonts...`);
    await page.evaluate(async () => {
      await document.fonts.ready;
    });

    // Wait for all images to load
    console.log(`🖼️  Waiting for images...`);
    await page.evaluate(async () => {
      const images = Array.from(document.images);
      await Promise.all(
        images
          .filter((img) => !img.complete)
          .map(
            (img) =>
              new Promise((resolve) => {
                img.onload = img.onerror = () => resolve();
              })
          )
      );
    });

    // Add a small delay for any remaining rendering
    await page.waitForTimeout(500);

    // Add PDF-specific styles
    await page.addStyleTag({
      content: `
        /* Force white background */
        html, body {
          background: white !important;
        }
        
        /* Hide any UI elements that shouldn't be in PDF */
        .no-print,
        button,
        [role="button"] {
          display: none !important;
        }
        
        /* Ensure the PDF pages are visible and properly sized */
        #pdf-export-root {
          position: static !important;
          left: auto !important;
        }
        
        .pdf-page {
          width: ${A4_WIDTH}px !important;
          height: ${A4_HEIGHT}px !important;
          page-break-after: always;
          page-break-inside: avoid;
          margin: 0 !important;
          box-shadow: none !important;
        }
        
        .pdf-page:last-child {
          page-break-after: auto;
        }
      `,
    });

    // Generate PDF
    console.log(`📑 Generating PDF...`);
    await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true,
      margin: {
        top: "0mm",
        right: "0mm",
        bottom: "0mm",
        left: "0mm",
      },
      preferCSSPageSize: true,
    });

    console.log(`✅ PDF saved successfully: ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error generating PDF:`, error.message);
    throw error;
  } finally {
    await browser.close();
  }
}

// Main execution
const args = process.argv.slice(2);
const url = args[0] || "http://localhost:5173/pitch-deck";
const outputFilename = args[1] || "OneRooted-PitchDeck.pdf";
const outputPath = join(process.cwd(), outputFilename);

exportPDF(url, outputPath).catch((error) => {
  console.error(error);
  process.exit(1);
});
