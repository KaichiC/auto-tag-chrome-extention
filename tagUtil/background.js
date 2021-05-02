chrome.runtime.onInstalled.addListener(() => {
    // Replace all rules ...
    this.chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        // With a new rule ...
        chrome.declarativeContent.onPageChanged.addRules([
            {
                // That fires when a page's URL contains a 'g' ...
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: 'slack' },
                    })
                ],
                // And shows the extension's page action.
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        // 給予此選單項目的 ID
        "id": "tagAll",
        // 給予此選單項目顯示的名稱
        "title": "tagAll",
        // 指定只在編輯欄位上點擊右鍵才會顯示此選單項目
        "contexts": ["editable"],
        // slack only
        "documentUrlPatterns" : ["https://app.slack.com/*"],
    })
})
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        // 給予此選單項目的 ID
        "id": "tagComponent",
        // 給予此選單項目顯示的名稱
        "title": "tagComponent",
        // 指定只在編輯欄位上點擊右鍵才會顯示此選單項目
        "contexts": ["editable"],
        // slack only
        "documentUrlPatterns" : ["https://app.slack.com/*"],
    })
})
chrome.contextMenus.onClicked.addListener(function(info,tab) {
    console.log("ID是：" + info.menuItemId + "\n" +
        "現在的網址是：" + info.pageUrl + "\n" +
        "選取的文字是：" + (info.selectionText ? info.selectionText : "") + "\n" +
        "現在hover元素的圖片來源：" + (info.srcUrl ? info.srcUrl : "") + "\n" +
        "現在hover的連結：" + (info.linkUrl ? info.linkUrl : "") + "\n" +
        "現在hover的frame是：" + (info.frameUrl ? info.frameUrl : "") + "\n"
    );
});