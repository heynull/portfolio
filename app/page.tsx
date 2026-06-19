"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const linkStyle = {
    color: "#f56e59",
    textDecoration: "none",
    borderBottom: "1px solid rgba(245, 110, 89, .3)",
    transition: "border-color .15s ease",
  };

  // Navigation items (removed INTERESTS)
  const navItems = [
    { id: "work", label: "WORK" },
    { id: "projects", label: "PROJECTS" },
    { id: "publications", label: "PUBLICATIONS" },
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Work data
  const workItems = [
    {
      id: 1,
      title: "spawnlabs",
      description: "agent platform for domain operators",
      link: "https://spawnlabs.ai",
      image: "/images/spawnlabs.jpg", // Add your image later
    },
    {
      id: 2,
      title: "agentstuff",
      description: "memory for your agents",
      link: "https://spawnlabs.ai",
      image: "/images/agentstuff.jpg", // Add your image later
    },
    {
      id: 3,
      title: "Give your agents real Macs.",
      description: "",
      link: "",
      image: "/images/macs.jpg", // Add your image later
    },
  ];

  return (
    <>
      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          right: isMobile ? "20px" : "30px",
          top: isMobile ? "auto" : "50%",
          bottom: isMobile ? "20px" : "auto",
          transform: isMobile ? "none" : "translateY(-50%)",
          display: "flex",
          flexDirection: isMobile ? "row" : "column",
          gap: isMobile ? "8px" : "20px",
          zIndex: 1000,
          background: isMobile ? "rgba(255,255,255,0.95)" : "transparent",
          padding: isMobile ? "12px 16px" : "0",
          borderRadius: isMobile ? "30px" : "0",
          backdropFilter: isMobile ? "blur(10px)" : "none",
          boxShadow: isMobile ? "0 4px 20px rgba(0,0,0,0.08)" : "none",
          border: isMobile ? "1px solid rgba(0,0,0,0.06)" : "none",
        }}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: isMobile ? "10px" : "12px",
              fontWeight: activeSection === item.id ? "600" : "400",
              color: activeSection === item.id ? "#f56e59" : "#6b7280",
              letterSpacing: "1px",
              padding: isMobile ? "4px 6px" : "4px 0",
              transition: "all 0.3s ease",
              textTransform: "uppercase",
              fontFamily: "'clutch', 'Courier New', monospace",
              position: "relative",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#f56e59";
              e.currentTarget.style.transform = isMobile ? "scale(1.05)" : "translateX(-4px)";
            }}
            onMouseLeave={(e) => {
              if (activeSection !== item.id) {
                e.currentTarget.style.color = "#6b7280";
              }
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {item.label}
            {!isMobile && activeSection === item.id && (
              <span
                style={{
                  position: "absolute",
                  right: "-16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "6px",
                  height: "6px",
                  backgroundColor: "#f56e59",
                  borderRadius: "50%",
                }}
              />
            )}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <div style={{ maxWidth: "768px", margin: "0 auto", padding: "30px 25px" }} className="responsive-padding">
        {/* Header */}
        <div style={{ marginBottom: "40px" }}>
          <h1 style={{ fontSize: "20px", fontWeight: "600", margin: 0 }}>
            moses ajila
          </h1>
          <p style={{ color: "#000000", fontSize: "20px", margin: 0 }}>
            product, developer
          </p>
        </div>

        {/* Work Section - Grid Layout */}
        <div id="work" style={{ marginBottom: "40px", scrollMarginTop: "20px" }}>
          <h2 className="section-title">WORK</h2>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}>
            {workItems.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  padding: "16px",
                  borderRadius: "8px",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: item.link ? "pointer" : "default",
                  backgroundColor: "transparent",
                  border: "1px solid transparent",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fafafa";
                  e.currentTarget.style.borderColor = "#e5e7eb";
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onClick={() => {
                  if (item.link) {
                    window.open(item.link, "_blank");
                  }
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: "100%",
                    height: "160px",
                    backgroundColor: "#f3f4f6",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#9ca3af",
                    fontSize: "14px",
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (item.image) {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {!item.image && "Image"}
                </div>

                {/* Title with link */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        ...linkStyle,
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <span style={{ fontSize: "16px", fontWeight: "500" }}>
                      {item.title}
                    </span>
                  )}
                </div>

                {/* Description */}
                {item.description && (
                  <span className="projects-text" style={{ color: "#6b7280", fontSize: "14px" }}>
                    {item.description}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div id="projects" style={{ marginBottom: "40px", scrollMarginTop: "20px" }}>
          <h2 className="section-title">PROJECTS</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            
            <div style={{ display: "flex", gap: "8px" }}>
              <span style={{ color: "#000000" }}>•</span>
              <span className="projects-text">
                currently building at{" "}
                <a
                  href="https://fiysamenergy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#f56e59")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(245, 110, 89, .3)")}
                >
                  @Fiysam Energy
                </a>
                : Fiysam Energy Services delivers end-to-end engineering, procurement, and construction solutions for the oil, gas, and power sectors across West Africa.
              </span>
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
              <span style={{ color: "#000000" }}>•</span>
              <span className="projects-text">
                frontend & product @{" "}
                <a
                  href="https://pnl-dashboard-opal.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#f56e59")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(245, 110, 89, .3)")}
                >
                  PNL Dashboard — Risk Monitoring System
                </a>
                : A real-time risk monitoring dashboard for tracking profit & loss (PnL), exposure, and trading performance.
              </span>
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
              <span style={{ color: "#000000" }}>•</span>
              <span className="projects-text">
                frontend{" "}
                <a
                  href="https://spend-dashboard-x2fs-erxdf5hhn-ajgits-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#f56e59")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(245, 110, 89, .3)")}
                >
                  @SpendOS
                </a>
                : A high-performance spend analytics dashboard inspired by modern fintech tools, built for tracking and analyzing financial data.
              </span>
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
              <span style={{ color: "#000000" }}>•</span>
              <span className="projects-text">
                research & development{" "}
                <a
                  href="https://www.linkedin.com/company/kloud6"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#f56e59")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(245, 110, 89, .3)")}
                >
                  @kloud6
                </a>
                : a startup software company specializing in building of custom internal tool.
              </span>
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
              <span style={{ color: "#000000" }}>•</span>
              <span className="projects-text">
                computer science{" "}
                <a
                  href="https://funaab.edu.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#f56e59")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(245, 110, 89, .3)")}
                >
                  @funaab
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Selected Publications */}
        <div id="publications" style={{ marginBottom: "40px", scrollMarginTop: "20px" }}>
          <h2 className="section-title">SELECTED PUBLICATIONS</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            
            <div style={{ display: "flex", gap: "8px" }}>
              <span style={{ color: "#000000" }}>•</span>
              <span className="publications-text">
                Killed by Google is the Google graveyard; a free and open source list of discontinued Google services, products, devices, and apps -{" "}
                <a
                  href="https://killedbygoogle.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#f56e59")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(245, 110, 89, .3)")}
                >
                  Cody Ogden
                </a>
              </span>
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
              <span style={{ color: "#000000" }}>•</span>
              <span className="publications-text">
                Brief History of Scaling Uber -{" "}
                <a
                  href="https://highscalability.com/brief-history-of-scaling-uber/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#f56e59")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(245, 110, 89, .3)")}
                >
                  Josh Clemm
                </a>
              </span>
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
              <span style={{ color: "#000000" }}>•</span>
              <span className="publications-text">
                Everything Paul Graham is a must read -{" "}
                <a
                  href="https://paulgraham.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#f56e59")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(245, 110, 89, .3)")}
                >
                  Paul Graham
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div id="interests" style={{ marginBottom: "20px", scrollMarginTop: "20px" }}>
          <h2 className="section-title">INTERESTS</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            
            <div style={{ display: "flex", gap: "8px" }}>
              <span style={{ color: "#000000" }}>•</span>
              <span className="interests-text">mobile, desktop development</span>
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
              <span style={{ color: "#000000" }}>•</span>
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
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#f56e59")}
              onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(245, 110, 89, .3)")}
            >
              linkedin
            </a>
            <a
              href="https://github.com/heynull"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#f56e59")}
              onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(245, 110, 89, .3)")}
            >
              github
            </a>
            <a
              href="https://twitter.com/ajilamoses"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#f56e59")}
              onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(245, 110, 89, .3)")}
            >
              x (twitter)
            </a>
            <a
              href="mailto:mosesajila@gmail.com"
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#f56e59")}
              onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "rgba(245, 110, 89, .3)")}
            >
              mosesajila@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}