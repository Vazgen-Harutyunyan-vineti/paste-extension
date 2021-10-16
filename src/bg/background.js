
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender)
    sendResponse({success:true});
});
chrome.contextMenus.create({
  title: "Populate COI values", 
  contexts:['all'], 
  onclick: ()=>{
    
  }
});

const sendPopulateRequest = ()=>{
  chrome.runtime.sendMessage('populateCOI')
}