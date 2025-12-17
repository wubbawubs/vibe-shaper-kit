export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-medium">
            Hiring isn't broken. Your tools are.
          </h2>

          <div className="space-y-4 text-muted-foreground text-lg">
            <p>
              Your ATS stores candidates. Slack hosts discussions. Excel tracks decisions.
            </p>
            <p>
              The result? Chaos. No single source of truth. No accountability. No insight.
            </p>
          </div>

          <blockquote className="pt-8 border-t border-border">
            <p className="text-xl md:text-2xl font-medium italic text-foreground/80">
              "Hiring didn't get more complex.<br />
              Your tools just never evolved."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
