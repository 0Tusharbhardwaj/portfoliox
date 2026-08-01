"use client";
import { motion } from "framer-motion";

const interests = [
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    desc: "LLM applications, prompt engineering, RAG systems, and AI-assisted tooling for real-world workflows.",
  },
  {
    icon: "🌐",
    title: "Network Automation",
    desc: "Telemetry collection, topology discovery, and SNMP/gNMI/BMP protocol automation for enterprise networks.",
  },
  {
    icon: "⚙️",
    title: "Distributed Systems",
    desc: "Scalable architecture, consistency models, fault-tolerance, and message-passing systems.",
  },
  {
    icon: "📡",
    title: "Infrastructure Observability",
    desc: "Real-time monitoring pipelines, Prometheus/Grafana stack, alerting systems, and SLOs.",
  },
  {
    icon: "🕸️",
    title: "Knowledge Graphs",
    desc: "Graph databases (Neo4j), infrastructure modeling, and graph-based reasoning for complex systems.",
  },
  {
    icon: "🏢",
    title: "Enterprise Networking",
    desc: "BGP, OSPF, data center networking, VRF routing, and carrier-grade infrastructure.",
  },
];

const learning = [
  "Kubernetes",
  "Docker (Advanced)",
  "Graph Databases",
  "LLMs & RAG",
  "MCP Protocol",
  "Distributed Systems",
  "Cloud-Native Architecture",
];

export default function Research() {
  return (
    <section
      id="research"
      style={{ padding: "96px 0", borderTop: "1px solid #1C1C1F" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "64px" }}
        >
          <p className="section-label">Research Interests</p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#FAFAFA",
              lineHeight: 1.2,
            }}
          >
            What I&apos;m exploring.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {interests.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card"
              style={{ padding: "24px" }}
            >
              <span style={{ fontSize: "24px", display: "block", marginBottom: "12px" }}>
                {item.icon}
              </span>
              <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#FAFAFA", marginBottom: "8px" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "13px", color: "#71717A", lineHeight: 1.7 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="card"
            style={{
              padding: "24px 28px",
              borderColor: "rgba(59, 130, 246, 0.15)",
            }}
          >
            <p
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#3B82F6",
                marginBottom: "14px",
              }}
            >
              Currently Learning
            </p>
            <div className="flex flex-wrap gap-2">
              {learning.map((item) => (
                <span
                  key={item}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "6px 14px",
                    background: "rgba(59, 130, 246, 0.05)",
                    border: "1px solid rgba(59, 130, 246, 0.15)",
                    borderRadius: "8px",
                    fontSize: "13px",
                    color: "#A1A1AA",
                    fontFamily: "JetBrains Mono, monospace",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#3B82F6",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
