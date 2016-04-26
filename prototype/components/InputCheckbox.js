def((Item, Value) => {

  class InputCheckboxItem extends Item {
    get template() {
      return `
        <label>
          <span>{text}</span>
          <input ref="input" type="checkbox" name="n" value="{value}" />
        </label>
      `;
    }
    get checked() { return this.input.checked; }
    get styleSheet() {
      return `
        :scope {
          margin-right: 1em;
        }
      `;
    }
  }

  return class extends Value {
    get template() { return `<form></form>`; }
    init() {
      let list = Object.keys(this.options).map(key => {
        return { value: key, text: this.options[key] };
      });
      this.list = InputCheckboxItem.cast(list).renderTo(this);
    }
    get value() {
      return this.list.filter(item => item.checked).map(item => item.input.value);
    }
  };

});
