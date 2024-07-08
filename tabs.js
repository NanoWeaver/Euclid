document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.work__control-element').forEach(function(tabsElm) {
        tabsElm.addEventListener('click',function(event){
            const path = event.currentTarget.dataset.path
            console.log(path)

            document.querySelectorAll('.work__tab-content').forEach(function(workTabContent) {
                workTabContent.classList.remove('work__tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('work__tab-content-active')
        })
    })
})