const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Upholstery PDS For?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH Upholstery PDS is ideal wherever upholstery patterns need to be
          developed, modified, and standardized digitally to save time and
          material.
        </p>

        {/* Upholstered furniture manufacturers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Upholstered furniture manufacturers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Sofa, recliner, chair, sectional, and mattress manufacturers who
              must create and update fabric, leather, and foam patterns
              frequently.
            </li>
            <li>
              Plants seeking consistent fit and shape across product lines
              while minimizing fabric offcuts and foam wastage.
            </li>
          </ul>
        </div>

        {/* Automotive and transport seating */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Automotive and transport seating
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              OEMs and tier-1 suppliers producing car, bus, truck, rail, and
              aircraft seats with complex upholstery patterns and variants.
            </li>
            <li>
              Units needing accurate digital templates for stitched covers,
              headrests, armrests, and interior trim panels.
            </li>
          </ul>
        </div>

        {/* Marine and aviation */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Marine, aviation, and specialty upholstery shops
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Workshops handling boat interiors, yacht seating, aircraft
              refurbishing, and specialty seating where manual patterns are slow
              and error-prone.
            </li>
            <li>
              Businesses that re-upholster high-value items and benefit from
              reusable, editable digital pattern libraries.
            </li>
          </ul>
        </div>

        {/* Custom upholstery */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Custom upholstery and re-upholstery studios
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Local upholstery studios working on sofas, chairs, hotel
              furniture, and heritage pieces that need precise patterns for
              one-off or small-batch jobs.
            </li>
            <li>
              High-end bespoke service providers wanting professional,
              documented templates to ensure repeatability and quality control.
            </li>
          </ul>
        </div>

        {/* Automotive aftermarket */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Automotive aftermarket and accessories
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Companies producing seat covers, interior kits, dashboards, and
              cabin accessories for the aftermarket and dealer networks.
            </li>
            <li>
              Brands that require standardized digital patterns to coordinate
              production across multiple subcontractors and locations.
            </li>
          </ul>
        </div>

        {/* Training institutes */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Training institutes and technical centres
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Upholstery, furniture, and automotive interior training programs
              that want students to learn modern CAD-based upholstery pattern
              workflows.
            </li>
            <li>
              Skill-development centres preparing technicians for digital
              upholstery roles in furniture, automotive, and transport sectors.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;
