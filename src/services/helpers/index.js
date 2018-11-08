String.prototype.capitalize = function () {
  return this.charAt( 0 ).toUpperCase() + this.slice( 1 );
};

export const toListArray = function ( obj: Object ) {
  return Object.keys(obj).map((val) => { return { key: val } } );
};
