export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu("FinBoard")
    .addItem("Create Report", "openDialog")

  menu.addToUi()
}

export const openDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile("client")
    .setWidth(1000)
    .setHeight(800)
  SpreadsheetApp.getUi().showModalDialog(html, "Create Report")
}
