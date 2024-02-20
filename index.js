const fs = require("fs");
const yaml = require("js-yaml");

// Update this as you deem fit
const validDns = [
  "acelords.com",
  "www.acelords.com",
  "inertia-skeleton.acelords.com",
  "icons.acelords.com",
  "project-pegasus.acelords.com",
  "messenger-inertia.acelords.com",
  "markdownmail.acelords.com",
  "laraboo.acelords.com",
];

try {
  let doc = yaml.load(fs.readFileSync("dns-records.yml", "utf8"));

  if (doc) {
    doc.records.forEach((record) => {
      // set all as false first
      record.keep = false;
    });

    doc.records.forEach((record) => {
      if (validDns.includes(record.name)) {
        record.keep = true;
      }
    });

    fs.writeFileSync("dns-fixed.yml", yaml.dump(doc));
  }
} catch (error) {
  console.error(error);
}
