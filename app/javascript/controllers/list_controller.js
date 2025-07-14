import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = [ "active" ]
  static values = { selected: String }

  select(event) {
    this.#clearPreviousSelection()
    this.#setActiveSelection(event.currentTarget)
  }

  #clearPreviousSelection() {
    if (!this.hasSelectedValue) return
    const previousSelection = this.element.querySelector(`#${this.selectedValue}`)
    previousSelection?.classList.remove(this.activeClass)
  }

  #setActiveSelection(target) {
    this.selectedValue = target.id
    target.classList.add(this.activeClass)
  }
}
