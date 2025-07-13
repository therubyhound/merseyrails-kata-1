function preserveScrollPositions() {
  var scrollPositions = {}

  addEventListener("turbo:before-render", function(){
    document.querySelectorAll("[data-preserve-scroll]").forEach(function(element){ 
      scrollPositions[element.id] = element.scrollTop
    })
  })

  addEventListener("turbo:render", function(){
    document.querySelectorAll("[data-preserve-scroll]").forEach(function(element){ 
      element.scrollTop = scrollPositions[element.id]
    })
  })
}

export default preserveScrollPositions
preserveScrollPositions()