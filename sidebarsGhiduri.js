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
          items: ["publicare/materiale-scrise"],
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
                "procesari-etl/administrative-boundaries/ro-admin-county-polygon",
                "procesari-etl/administrative-boundaries/ro-admin-county-line",
                "procesari-etl/administrative-boundaries/ro-admin-region-polygon",
                "procesari-etl/administrative-boundaries/ro-admin-region-line",
                "procesari-etl/administrative-boundaries/ro-admin-macroregion-polygon",
                "procesari-etl/administrative-boundaries/ro-admin-macroregion-line",
                "procesari-etl/administrative-boundaries/ro-admin-country-polygon",
                "procesari-etl/administrative-boundaries/ro-admin-country-line",
                "procesari-etl/administrative-boundaries/ro-admin-lau-simplified-polygon",
                "procesari-etl/administrative-boundaries/ro-admin-lau-simplified-line",
                "procesari-etl/administrative-boundaries/ro-admin-lau-bucharest-merged-polygon",
                "procesari-etl/administrative-boundaries/ro-admin-lau-bucharest-merged-line",
                "procesari-etl/administrative-boundaries/ro-admin-lau-simplified-bucharest-merged-polygon",
                "procesari-etl/administrative-boundaries/ro-admin-lau-simplified-bucharest-merged-line",
                "procesari-etl/administrative-boundaries/ro-admin-county-simplified-polygon",
                "procesari-etl/administrative-boundaries/ro-admin-county-simplified-line",
                "procesari-etl/administrative-boundaries/ro-admin-region-simplified-polygon",
                "procesari-etl/administrative-boundaries/ro-admin-region-simplified-line",
                "procesari-etl/administrative-boundaries/ro-admin-macroregion-simplified-polygon",
                "procesari-etl/administrative-boundaries/ro-admin-macroregion-simplified-line",
                "procesari-etl/administrative-boundaries/ro-admin-country-simplified-polygon",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Accesare date",
          items: ["date/introducere", "date/cautare-date", "date/formate-date"],
        },
      ],
    },
  ],
};
