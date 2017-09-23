// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	var row;
	var col;
// Your code goes here!
	var grid=$("#pixel_canvas");
	var gridjs=document.getElementById("pixel_canvas");
	$("#pixel_canvas tbody").remove();
	grid.innerHTML = "";
	while(gridjs.rows.length > 0)
		gridjs.deleteRow(0);
	row = document.getElementById("input_height").value;
	col = document.getElementById("input_width").value;
	for (var x = 0; x < row; x++) {
		var insertedrows = grid.append('<tr class="gridrow"></tr>')
	}
	for (var y = 0; y < col; y++) {
		var insertedcols=$('.gridrow').append('<td class="gridcol"></td>')
		insertedcols.click(function(e) {
			var clr = document.getElementById("colorPicker").value;
			e.target.style.backgroundColor = clr;
			this.style.borderColor="black";
			});
			
		};
}
$( "#sizePicker" ).submit(function( event ) {
  event.preventDefault();
  makeGrid();
});
