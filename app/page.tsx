"use client";

export default function Home() {
  return (
    <div style={{ maxWidth: "768px", margin: "0 auto", padding: "30px 25px" }} className="responsive-padding">
      {/* Header */}
      <div style={{ marginBottom: "40px" }}>
        <p style={{ fontSize: "20px", fontWeight: "600", margin: 0 }}>
          moses ajila
        </p>
        <p style={{ color: "#6b7280", fontSize: "20px", margin: 0 }}>
          product, developer
        </p>
      </div>

      {/* Projects */}
      <div style={{ marginBottom: "40px" }}>
        <h2 className="section-title">PROJECTS</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          
          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ color: "#9ca3af" }}>•</span>
            <span className="projects-text">
              currently building at{" "}
              <a
                href="https://fiysamenergy.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "red", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                @Fiysam Energy
              </a>
              : Fiysam Energy Services delivers end-to-end engineering, procurement, and construction solutions for the oil, gas, and power sectors across West Africa.
            </span>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ color: "#9ca3af" }}>•</span>
            <span className="projects-text">
              frontend & product @{" "}
              <a
                href="https://pnl-dashboard-opal.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "red", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                PNL Dashboard — Risk Monitoring System
              </a>
              : A real-time risk monitoring dashboard for tracking profit & loss (PnL), exposure, and trading performance.
            </span>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ color: "#9ca3af" }}>•</span>
            <span className="projects-text">
              frontend{" "}
              <a
                href="https://spend-dashboard-x2fs-erxdf5hhn-ajgits-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "red", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                @SpendOS
              </a>
              : A high-performance spend analytics dashboard inspired by modern fintech tools, built for tracking and analyzing financial data.
            </span>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ color: "#9ca3af" }}>•</span>
            <span className="projects-text">
              research & development{" "}
              <a
                href="https://www.linkedin.com/company/kloud6"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "red", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                @kloud6
              </a>
              : a startup software company specializing in building of custom internal tool.
            </span>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ color: "#9ca3af" }}>•</span>
            <span className="projects-text">
              computer science{" "}
              <a
                href="https://funaab.edu.ng"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "red", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                @funaab
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Selected Publications */}
      <div style={{ marginBottom: "40px" }}>
        <h2 className="section-title">SELECTED PUBLICATIONS</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          
          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ color: "#9ca3af" }}>•</span>
            <span className="publications-text">
              Killed by Google is the Google graveyard; a free and open source list of discontinued Google services, products, devices, and apps -{" "}
              <a
                href="https://killedbygoogle.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "red", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                Cody Ogden
              </a>
            </span>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ color: "#9ca3af" }}>•</span>
            <span className="publications-text">
              Brief History of Scaling Uber -{" "}
              <a
                href="https://highscalability.com/brief-history-of-scaling-uber/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "red", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                Josh Clemm
              </a>
            </span>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ color: "#9ca3af" }}>•</span>
            <span className="publications-text">
              Everything Paul Graham is a must read -{" "}
              <a
                href="https://paulgraham.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "red", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
              >
                Paul Graham
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Interests */}
      <div style={{ marginBottom: "20px" }}>
        <h2 className="section-title">INTERESTS</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          
          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ color: "#9ca3af" }}>•</span>
            <span className="interests-text">mobile, desktop development</span>
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <span style={{ color: "#9ca3af" }}>•</span>
            <span className="interests-text">Low-level, A.I engineering</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ paddingTop: "10px", borderTop: "1px solid #e5e7eb" }}>
        <p className="footer-text" style={{ marginBottom: "10px", fontWeight: "400" }}>
          building products, tennis, reading and writing.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "18px", fontWeight: "600" }}>
          <a
            href="https://linkedin.com/in/ajila-moses"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "red", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            linkedin
          </a>
          <a
            href="https://github.com/heynull"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "red", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            github
          </a>
          <a
            href="https://twitter.com/ajilamoses"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "red", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            x (twitter)
          </a>
          <a
            href="mailto:mosesajila@gmail.com"
            style={{ color: "red", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
          >
            mosesajila@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}