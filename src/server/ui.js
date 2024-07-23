export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu("finboard assignment") // edit me!
    .addItem("finboard assignment", "openDialog")

  menu.addToUi()
}

export const openDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile("report-page")
    .setWidth(1000)
    .setHeight(800)
  SpreadsheetApp.getUi().showModalDialog(html, "Sheet Editor")
}
