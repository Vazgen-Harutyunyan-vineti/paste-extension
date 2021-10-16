const saveValue = () => {
	const coi = document.getElementById(coi-value).value
	chrome.runtime.sendMessage({coi},response=>{
        console.log(response.success)
    })
} 