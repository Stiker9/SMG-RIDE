const SPREADSHEET_ID = '1MgMTP9R_bbupLiBHX8NaziEIiHGNoEG7VjkM442_HMs'
const SHEET_NAME = 'Заявки'

function doGet() {
  return jsonResponse({ ok: true, service: 'SMG RIDE leads' })
}

function doPost(event) {
  const data = event && event.parameter ? event.parameter : {}

  if (data.website) {
    return jsonResponse({ ok: true })
  }

  const name = cleanCell(data.name)
  const phone = cleanCell(data.phone)
  const telegram = cleanCell(data.telegram)
  const source = cleanCell(data.source || 'Сайт')

  if (!name || !phone) {
    return jsonResponse({ ok: false, error: 'name_and_phone_required' })
  }

  const lock = LockService.getScriptLock()
  lock.waitLock(10000)

  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME)

    if (!sheet) {
      throw new Error('Sheet not found: ' + SHEET_NAME)
    }

    sheet.appendRow([
      new Date(),
      name,
      phone,
      telegram,
      source,
      'Новая',
    ])
  } finally {
    lock.releaseLock()
  }

  return jsonResponse({ ok: true })
}

function cleanCell(value) {
  const text = String(value || '').trim().slice(0, 500)
  return /^[=+\-]/.test(text) ? "'" + text : text
}

function jsonResponse(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON)
}
