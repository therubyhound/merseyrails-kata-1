import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static classes = [ "active" ]
  static values = { selected: String }

  connect() {
    this.#removePreviousSelection()
    this.#setCurrentSelection()
  }

  #removePreviousSelection() {
    if (!this.hasSelectedValue) return
    const previousSelection = this.element.querySelector(`#${this.selectedValue}`)
    previousSelection?.classList.remove(this.activeClass)
  }

  #setCurrentSelection() {
    const meta = document.querySelector(`meta[name="${this.element.id}_selection"]`)
    if (!meta) return
    this.selectedValue = meta.content
    const selection = this.element.querySelector(`#${this.selectedValue}`)
    selection?.classList.add(this.activeClass)
    selection?.scrollIntoView({ behavior: "auto", block: "start" })
  }
}
