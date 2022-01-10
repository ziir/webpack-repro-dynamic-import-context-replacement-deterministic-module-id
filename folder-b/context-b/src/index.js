const locale = window.locale;

const loadTranslationFile = function (locale) {
  return import(`../i18n/${locale}.json`);
};

async function main() {
  await loadTranslationFile(locale);
}
