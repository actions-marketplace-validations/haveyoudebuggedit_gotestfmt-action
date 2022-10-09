const core = require("@actions/core");

async function main() {
    let currentDate = new Date(Date.now())
    let cutoffDate = new Date(Date.UTC(2022, 11, 1, 0, 0, 0))
    if (currentDate.getTime() > cutoffDate.getTime()) {
        console.log("::error title=Please switch to GoTestTools/gotestfmt-action now!::You are still using the deprecated haveyoudebuggedit/gotestfmt-action! Please switch to GoTestTools/gotestfmt-action now! This repository will be deleted on January 1, 2023.")
        process.exit(1)
    } else {
        console.log("::warning title=Please switch to GoTestTools/gotestfmt-action::You are using the deprecated haveyoudebuggedit/gotestfmt-action. Please switch to GoTestTools/gotestfmt-action. This repository will be deleted on January 1, 2023.")
    }
}

main()