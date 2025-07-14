import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = [ "active" ]
  static values = { selected: String }

  connect() {
    if (!this.hasSelectedValue) return
    const selection = this.element.querySelector(`#${this.selectedValue}`)
    if (!selection) return
    this.#scrollToSelection(selection)
    this.#setActiveSelection(selection)
  }

  select(event) {
    this.#clearPreviousSelection()
    this.#setActiveSelection(event.currentTarget)
  }

  #scrollToSelection(target) {
    const stickyHeader = this.element.querySelector('.sticky')
    const headerHeight = stickyHeader?.offsetHeight ?? 0
    const elementTop = target.offsetTop - headerHeight
    this.element.scrollTo({ top: elementTop, behavior: "auto" })
  }

  #setActiveSelection(target) {
    this.selectedValue = target?.id
    target.classList.add(this.activeClass)
  }

  #clearPreviousSelection() {
    if (!this.hasSelectedValue) return
    const previousSelection = this.element.querySelector(`#${this.selectedValue}`)
    previousSelection?.classList.remove(this.activeClass)
  }
}
