import parcelJetPricing from "../db/parcelJetPricing";
import "./pricing.css";

const PricingTable = () => {
  return (
    <section className="pricing-section">
      {/* Header */}
      <div className="pricing-header">
        <span className="pricing-eyebrow">PRICING PLANS</span>
        <h1 className="pricing-title">
          Providing <strong>Best Pricing</strong> For Your Business.
        </h1>
        <p className="pricing-subtitle">
          All prices are VAT &amp; Tax exclusive. COD charge of 1% applies for
          Sub Dhaka &amp; Outside Dhaka deliveries.
        </p>
      </div>

      {/* Info Cards */}
      <div className="pricing-cards">
        <div className="info-card inside-dhaka">
          <div className="info-card-icon">🏙️</div>
          <h3>Inside Dhaka</h3>
          <div className="info-card-price">৳70</div>
          <p>Base rate (up to 1 KG)</p>
          <div className="info-card-extra">+৳15 per extra KG</div>
        </div>
        <div className="info-card sub-dhaka">
          <div className="info-card-icon">🏘️</div>
          <h3>Sub Dhaka</h3>
          <div className="info-card-price">৳110</div>
          <p>Base rate (up to 1 KG)</p>
          <div className="info-card-extra">+৳20 per extra KG</div>
          <div className="info-card-cod">+1% COD Charge</div>
        </div>
        <div className="info-card outside-dhaka">
          <div className="info-card-icon">🚚</div>
          <h3>Outside Dhaka</h3>
          <div className="info-card-price">৳130</div>
          <p>Base rate (up to 1 KG)</p>
          <div className="info-card-extra">+৳20 per extra KG</div>
          <div className="info-card-cod">+1% COD Charge</div>
        </div>
      </div>

      {/* Table */}
      <div className="pricing-table-wrapper">
        <h2 className="table-heading">Weight-Based Pricing Breakdown</h2>
        <div className="table-scroll">
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Weight (KG)</th>
                <th>Inside Dhaka</th>
                <th>Sub Dhaka</th>
                <th>Outside Dhaka</th>
              </tr>
            </thead>
            <tbody>
              {parcelJetPricing.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "row-even" : "row-odd"}>
                  <td className="weight-cell">{row.weight}</td>
                  <td>{row.dhaka}</td>
                  <td>{row.subDhaka}</td>
                  <td>{row.outsideDhaka}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="table-note">
          * Weight charge applies after the first 1 KG. &nbsp;|&nbsp; All
          prices are VAT &amp; Tax exclusive.
        </p>
      </div>
    </section>
  );
};

export default PricingTable;
