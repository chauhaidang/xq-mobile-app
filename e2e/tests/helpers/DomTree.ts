import fs from 'node:fs'
const printDomTree = async (fileName: string) => {
  const content = await browser.getPageSource();
  fs.writeFileSync(
    `${driver.isAndroid ? 'android' : 'ios'}_dom_${fileName}.xml`,
    content,
    'utf8',
  );
}

export {
    printDomTree
}
