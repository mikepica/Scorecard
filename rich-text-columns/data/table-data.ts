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
    { id: "StratProg", title: "Strategic Programs (Objectives)" },
    { id: "Q1", title: "Q1" },
    { id: "Q2", title: "Q2" },
    { id: "Q3", title: "Q3" },
    { id: "Q4", title: "Q4" },
  ],
  rows: [
    {
      id: 1,
      strategicGoal: "SG1",
      cells: {
        StratProg: `Program-level blueprint to acquire all data for submissions`,
        Q1: ``,
        Q2: `(1) Contribution of Component & CDx strategy LSPC endorsed\n(2) Strategy applied in Artemide-Cancer03 & Hepatocyte-HCC004\n(3) Program-level MoA strategies for optimal data for submission`,
        Q3: ``,
        Q4: ``,
      },
    },
    {
      id: 2,
      strategicGoal: "SG1",
      cells: {
        StratProg: `Program-level safety outline to ensure optimal market imAE management`,
        Q1: `(1) Develop thorough internal/external education on imAE management: communication/training complete for physicians, nurses & patients\n(2) Infuse market with program-level safety strategies for imAE optimization`,
        Q2: `(1) Ideal CV surveillance: analyze potential for remote CV/death risk monitoring\n(2) IoT-tox MDT ideal practices launched`,
        Q3: `(1) Ideal liver monitoring: examine LFT intensity & duration\n(2) Build understanding on novel agents benefiting toxicity management: initiate knowledge database from internal/external hubs - Omnichannel initiated`,
        Q4: `(1) Ideal liver monitoring`,
        sample: 'testing'
      },
    },
    {
      id: 3,
      strategicGoal: "SG1",
      cells: {
        StratProg: `Form RUO QCS products: FRA, CLDN18.2, GPC3, TROP2, B7-H3.`,
        Q1: `Produce 2 RUO solutions: i.e. FRA in NSCLC & B7H4 Apical Endometrial`,
        Q2: `Generate 3 RUO solutions for FRA, CLDN18.2: i.e. TROP2 Bladder Cancer, GPC3 HCC, CLDN18.2 PDAC.`,
        Q3: `Forge 2 RUO solutions (targets/indications): i.e. TROP2 in TNBC, CLDN18.2 BTC.`,
        Q4: `Create a RUO`,
        sample: 'testing2'
      },
    },
    {
      id: 4,
      strategicGoal: "SG2",
      cells: {
        StratProg: `Apply and develop Foundation Models in QCS platform progressions`,
        Q1: `Complete examination effort`,
        Q2: `Examine effort`,
        Q3: `Create a RUO`,
        Q4: `Introduce a`,
      },
    },
    {
      id: 5,
      strategicGoal: "SG2",
      cells: {
        StratProg: `Build capacity for chromogenic assays & correlated computing in CBD.`,
        Q1: `Conclude strategy for assay development based on ESP, and present chromogenic solutions with at least 2 outside groups.`,
        Q2: `Create multi`,
        Q3: `Formulate (`,
        Q4: `Showcase t`,
      },
    },
    {
      id: 6,
      strategicGoal: "SG3",
      cells: {
        StratProg: `Present integrated computational platform & diagnostic program toolset`,
        Q1: `-Offer endometrial subtyping method (testing/verification)\n-Start the enriched tumor pilot via genomics`,
        Q2: `-Offer AEGEAN model (tested & validated)\n-Finish the GxP elements of Portal`,
        Q3: `Present enr`,
        Q4: `Revalidate P`,
      },
    },
    {
      id: 7,
      strategicGoal: "SG3",
      cells: {
        StratProg: `Revamp Single Cell capabilities; capitalize on Immunai partnership to aid Bispecifics & ADC/CAR-T plans`,
        Q1: `Complete F`,
        Q2: `Proceed wit`,
        Q3: `Present enr`,
        Q4: `Revalidate P`,
      },
    },
  ],
};