export default {
  ghiduriSidebar: [
    {
      type: "category",
      label: "Ghiduri",
      link: { type: "doc", id: "introducere" },
      items: [
        { type: "doc", id: "introducere" },
        {
          type: "category",
          label: "Publicare materiale scrise",
          items: ["publicare/date-despre"],
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
              items: [
                "procesari-etl/administrative-boundaries/ro-admin-lau-polygon",
                "procesari-etl/administrative-boundaries/ro-admin-lau-line",
                "procesari-etl/administrative-boundaries/ro-admin-lau-simplified-polygon",
                "procesari-etl/administrative-boundaries/ro-admin-lau-simplified-line",
              ],
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
          items: ["date/formate-date", "date/generalitati"],
        },
      ],
    },
  ],
};
