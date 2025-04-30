export interface TableColumn {
  id: string
  title: string
}

export interface TableRow {
  id: number
  strategicGoal: "SG1" | "SG2" | "SG3"
  cells: Record<string, string>
}

export interface TableData {
  columns: TableColumn[]
  rows: TableRow[]
}

export const tableData: TableData = {
  columns: [
    { id: "company", title: "Company News" },
    { id: "product", title: "Product Updates" },
    { id: "industry", title: "Industry Insights" },
    { id: "customer", title: "Customer Stories" },
    { id: "resources", title: "Resources & Guides" },
  ],
  rows: [
    {
      id: 1,
      strategicGoal: "SG1",
      cells: {
        company: `
          <h3>Quarterly Results</h3>
          <p>Our company has <strong>exceeded</strong> expectations this quarter with a <em>15% growth</em> in revenue.</p>
          <ul>
            <li>New product line launched</li>
            <li>Expanded to 3 new markets</li>
            <li>Hired 25 new employees</li>
          </ul>
          <p>Read the <a href="#">full report</a> for more details.</p>
        `,
        product: `
          <h3>Version 2.5 Released</h3>
          <p>We're excited to announce the release of <strong>Version 2.5</strong> with the following improvements:</p>
          <ol>
            <li>Redesigned user interface</li>
            <li>Performance optimizations</li>
            <li>New API endpoints</li>
          </ol>
          <blockquote>
            <p>"This update has significantly improved our workflow." - Jane Doe, Product Manager</p>
          </blockquote>
        `,
        industry: `
          <h3>Market Trends 2023</h3>
          <p>The industry is seeing a shift towards <strong>sustainable practices</strong> and <em>ethical sourcing</em>.</p>
          <p>Key statistics:</p>
          <ul>
            <li>73% of consumers prefer eco-friendly products</li>
            <li>Investment in green technology up by 28%</li>
            <li>Regulatory changes expected in Q3</li>
          </ul>
        `,
        customer: `
          <h3>Success Story: Acme Corp</h3>
          <p><strong>Acme Corporation</strong> implemented our solution and saw:</p>
          <ul>
            <li>40% reduction in operational costs</li>
            <li>Improved customer satisfaction scores</li>
            <li>Streamlined internal processes</li>
          </ul>
          <blockquote>
            <p>"The ROI was immediate and substantial." - John Smith, CTO at Acme Corp</p>
          </blockquote>
        `,
        resources: `
          <h3>Getting Started Guide</h3>
          <p>New to our platform? Follow these <strong>simple steps</strong>:</p>
          <ol>
            <li>Create your account</li>
            <li>Set up your profile</li>
            <li>Configure your preferences</li>
            <li>Explore the dashboard</li>
          </ol>
          <p>Check out our <a href="#">video tutorials</a> for visual guidance.</p>
        `,
      },
    },
    {
      id: 2,
      strategicGoal: "SG2",
      cells: {
        company: `
          <h3>New Office Opening</h3>
          <p>We're <strong>thrilled</strong> to announce the opening of our <em>new headquarters</em> in Austin, TX.</p>
          <ul>
            <li>30,000 sq ft state-of-the-art facility</li>
            <li>Sustainable design with LEED certification</li>
            <li>Expected to house 200+ employees</li>
          </ul>
          <p>Join us for the <a href="#">virtual tour</a> next month.</p>
        `,
        product: `
          <h3>Mobile App Redesign</h3>
          <p>Our mobile application has been <strong>completely redesigned</strong> with user experience at the forefront.</p>
          <ol>
            <li>Intuitive navigation</li>
            <li>Faster load times</li>
            <li>Offline capabilities</li>
            <li>Dark mode support</li>
          </ol>
          <blockquote>
            <p>"The new design is sleek and much easier to use." - Mobile App User</p>
          </blockquote>
        `,
        industry: `
          <h3>Regulatory Changes</h3>
          <p>New <strong>industry regulations</strong> are coming into effect next quarter that will impact:</p>
          <ul>
            <li>Data privacy practices</li>
            <li>Reporting requirements</li>
            <li>Compliance documentation</li>
          </ul>
          <p>Our team is prepared to help you <a href="#">navigate these changes</a>.</p>
        `,
        customer: `
          <h3>Case Study: TechStart Inc.</h3>
          <p><strong>TechStart Inc.</strong>, a growing startup, implemented our platform and experienced:</p>
          <ul>
            <li>65% faster onboarding process</li>
            <li>Reduction in manual errors by 80%</li>
            <li>Scalable solution that grew with their team</li>
          </ul>
          <blockquote>
            <p>"This solution transformed how we operate." - Sarah Chen, Founder of TechStart</p>
          </blockquote>
        `,
        resources: `
          <h3>Advanced Features Webinar</h3>
          <p>Join our <strong>expert team</strong> for a deep dive into advanced features:</p>
          <ol>
            <li>Custom workflows</li>
            <li>Advanced reporting</li>
            <li>Integration capabilities</li>
            <li>Automation rules</li>
          </ol>
          <p><a href="#">Register now</a> for the upcoming session.</p>
        `,
      },
    },
    {
      id: 3,
      strategicGoal: "SG3",
      cells: {
        company: `
          <h3>Sustainability Initiative</h3>
          <p>We're proud to announce our <strong>commitment to carbon neutrality</strong> by 2025.</p>
          <ul>
            <li>Reducing carbon footprint by 50%</li>
            <li>Investing in renewable energy</li>
            <li>Implementing sustainable supply chain practices</li>
          </ul>
          <p>Learn more about our <a href="#">environmental initiatives</a>.</p>
        `,
        product: `
          <h3>New Integration Partners</h3>
          <p>We've expanded our <strong>ecosystem</strong> with new integration partners:</p>
          <ol>
            <li>Salesforce</li>
            <li>HubSpot</li>
            <li>Slack</li>
            <li>Microsoft Teams</li>
          </ol>
          <blockquote>
            <p>"The Slack integration has streamlined our communication workflow." - Integration User</p>
          </blockquote>
        `,
        industry: `
          <h3>AI in Our Industry</h3>
          <p>Artificial Intelligence is <strong>transforming</strong> our industry in several ways:</p>
          <ul>
            <li>Predictive analytics improving forecasting</li>
            <li>Automated customer service solutions</li>
            <li>Enhanced data processing capabilities</li>
          </ul>
          <p>Read our <a href="#">AI impact report</a> for more insights.</p>
        `,
        customer: `
          <h3>Enterprise Success: Global Corp</h3>
          <p><strong>Global Corp</strong>, an enterprise client, achieved:</p>
          <ul>
            <li>Unified platform across 12 countries</li>
            <li>Standardized processes saving 2000+ hours annually</li>
            <li>Improved data visibility across departments</li>
          </ul>
          <blockquote>
            <p>"The enterprise-wide implementation exceeded our expectations." - CIO, Global Corp</p>
          </blockquote>
        `,
        resources: `
          <h3>New Knowledge Base</h3>
          <p>We've launched a <strong>comprehensive knowledge base</strong> with:</p>
          <ol>
            <li>Step-by-step tutorials</li>
            <li>Troubleshooting guides</li>
            <li>Best practice recommendations</li>
            <li>FAQ section</li>
          </ol>
          <p><a href="#">Explore the knowledge base</a> to find answers quickly.</p>
        `,
      },
    },
    {
      id: 4,
      strategicGoal: "SG1",
      cells: {
        company: `
          <h3>Leadership Changes</h3>
          <p>We're excited to welcome <strong>Jane Smith</strong> as our new <em>Chief Technology Officer</em>.</p>
          <ul>
            <li>20+ years of industry experience</li>
            <li>Previously led technology at Fortune 500 companies</li>
            <li>Focus on innovation and scalability</li>
          </ul>
          <p>Read Jane's <a href="#">vision for our technology</a>.</p>
        `,
        product: `
          <h3>Enterprise Plan Launch</h3>
          <p>Introducing our new <strong>Enterprise Plan</strong> with advanced features:</p>
          <ol>
            <li>Dedicated account management</li>
            <li>Custom SLAs</li>
            <li>Advanced security controls</li>
            <li>Priority support</li>
          </ol>
          <blockquote>
            <p>"The Enterprise Plan provides everything we need for our large organization." - Enterprise Customer</p>
          </blockquote>
        `,
        industry: `
          <h3>Remote Work Trends</h3>
          <p>The shift to <strong>remote work</strong> continues to impact our industry:</p>
          <ul>
            <li>85% of companies adopting hybrid models</li>
            <li>Increased demand for collaboration tools</li>
            <li>Focus on security for distributed teams</li>
          </ul>
          <p>Download our <a href="#">remote work whitepaper</a>.</p>
        `,
        customer: `
          <h3>Nonprofit Spotlight: EduAccess</h3>
          <p><strong>EduAccess</strong>, a nonprofit organization, used our platform to:</p>
          <ul>
            <li>Reach 50% more students in underserved areas</li>
            <li>Reduce administrative overhead by 35%</li>
            <li>Streamline volunteer coordination</li>
          </ul>
          <blockquote>
            <p>"This technology has helped us fulfill our mission more effectively." - Executive Director, EduAccess</p>
          </blockquote>
        `,
        resources: `
          <h3>API Documentation Update</h3>
          <p>We've <strong>completely revamped</strong> our API documentation:</p>
          <ol>
            <li>Interactive examples</li>
            <li>Improved search functionality</li>
            <li>Code samples in multiple languages</li>
            <li>Versioning information</li>
          </ol>
          <p><a href="#">Check out the new documentation</a> for developers.</p>
        `,
      },
    },
    {
      id: 5,
      strategicGoal: "SG2",
      cells: {
        company: `
          <h3>Funding Announcement</h3>
          <p>We're pleased to announce our <strong>Series C funding round</strong> of <em>$50 million</em>.</p>
          <ul>
            <li>Led by Venture Partners</li>
            <li>Funds allocated for international expansion</li>
            <li>Accelerating product development</li>
          </ul>
          <p>Read the <a href="#">press release</a> for more information.</p>
        `,
        product: `
          <h3>AI-Powered Features</h3>
          <p>We've integrated <strong>artificial intelligence</strong> into our platform:</p>
          <ol>
            <li>Smart recommendations</li>
            <li>Predictive analytics</li>
            <li>Automated reporting</li>
            <li>Natural language processing</li>
          </ol>
          <blockquote>
            <p>"The AI recommendations have saved us countless hours of analysis." - Product User</p>
          </blockquote>
        `,
        industry: `
          <h3>Security Compliance Updates</h3>
          <p>New <strong>security standards</strong> are being adopted across the industry:</p>
          <ul>
            <li>Enhanced encryption requirements</li>
            <li>Multi-factor authentication becoming standard</li>
            <li>Regular security audits mandatory</li>
          </ul>
          <p>Join our <a href="#">security webinar</a> to learn more.</p>
        `,
        customer: `
          <h3>Healthcare Success: MedTech Solutions</h3>
          <p><strong>MedTech Solutions</strong>, a healthcare provider, achieved:</p>
          <ul>
            <li>HIPAA-compliant data management</li>
            <li>30% reduction in patient wait times</li>
            <li>Improved coordination between departments</li>
          </ul>
          <blockquote>
            <p>"Patient care has improved significantly with this implementation." - Medical Director, MedTech</p>
          </blockquote>
        `,
        resources: `
          <h3>Certification Program</h3>
          <p>Announcing our new <strong>certification program</strong> for users:</p>
          <ol>
            <li>Beginner certification</li>
            <li>Advanced user certification</li>
            <li>Administrator certification</li>
            <li>Developer certification</li>
          </ol>
          <p><a href="#">Enroll in the certification program</a> to validate your expertise.</p>
        `,
      },
    },
  ],
}
