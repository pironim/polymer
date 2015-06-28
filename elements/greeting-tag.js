Polymer('greeting-tag', {
  ready: function() {
    this.salutations =  [
      {what: 'Hello', who: 'World'},
      {what: 'Buy', who: 'Man'},
      {what: 'Hello', who: 'Declarative'}
    ]
  },
  changeNameHandler: function() {
    this.salutations[1].who = 'Ololo'
  },
  removeHandler: function() {
    this.salutations = this.salutations.slice(1,2);
  }
});
