export default {
  ghiduriSidebar: [
    {
      type: "category",
      label: "Ghiduri",
      link: { type: "doc", id: "introducere" }, // id din introducere.mdx
      items: [
        { type: "doc", id: "introducere" }, // introducere.mdx
        {
          type: "category",
          label: "Publicare materiale scrise",
          items: [
            "publicare/date-despre", // publicare/date-despre.mdx
          ],
        },
        {
          type: "category",
          label: "Publicare metadate",
          items: ["metadate/generalitati", "metadate/adaugare-metadate", "metadate/completare-metadate"],
        },
        {
          type: "category",
          label: "Procesări ETL",
          items: [
            {
              type: "category",
              label: "Limite administrative",
              items: ["procesari-etl/limite-administrative/uat"],
            },
            {
              type: "category",
              label: "Ortofotoplanuri",
              items: ["procesari-etl/ortofoto/intro"],
            },
          ],
        },
        {
          type: "category",
          label: "Accesare date",
          items: ["date/formate-date"],
        },
      ],
    },
  ],
};
