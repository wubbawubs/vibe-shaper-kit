export function ComparisonSection() {
  const comparisons = [
    { ats: "Stores candidates", onerooted: "Connects hiring" },
    { ats: "Static pipelines", onerooted: "Adaptive workflows" },
    { ats: "Admin-first", onerooted: "Decision-first" },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-center mb-12">
            OneRooted vs Traditional ATS
          </h2>

          {/* Comparison Table */}
          <div className="border border-border rounded-lg overflow-hidden mb-12">
            {/* Header */}
            <div className="grid grid-cols-2 bg-muted/50">
              <div className="px-6 py-4 border-r border-border">
                <span className="text-sm font-medium text-muted-foreground">Traditional ATS</span>
              </div>
              <div className="px-6 py-4">
                <span className="text-sm font-medium text-primary">OneRooted</span>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((row, index) => (
              <div key={index} className="grid grid-cols-2 border-t border-border">
                <div className="px-6 py-4 border-r border-border text-muted-foreground">
                  {row.ats}
                </div>
                <div className="px-6 py-4 font-medium">
                  {row.onerooted}
                </div>
              </div>
            ))}
          </div>

          {/* Closing line */}
          <p className="text-center text-lg text-muted-foreground">
            ATS tools help you track candidates.<br />
            <span className="text-foreground font-medium">OneRooted helps you hire better people.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
