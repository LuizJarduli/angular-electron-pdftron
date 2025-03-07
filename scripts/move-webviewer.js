const fs = require("fs-extra");
const path = require("path");

const srcDir = path.join(
  __dirname,
  "../node_modules/@pdftron/webviewer/public"
);
const destDir = path.join(__dirname, "../src/assets/webviewer/public");

(async () => {
  try {
    await fs.ensureDir(destDir);
    await fs.copy(srcDir, destDir);

    console.log("[INFO] WebViewer files copied successfully!");
  } catch (err) {
    console.error("[INFO] Error copying WebViewer files:", err);
    process.exit(1);
  }
})();
