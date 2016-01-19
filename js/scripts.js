var isTriangle = function(side1, side2, side3) {
      if (side1 === side2 && side2 === side3 && side1 === side3) {
        return true;
        var equilateral = ("hey!!!")
      }
      else if (side1 === side2 || side2 === side3 || side1 === side3) {
        return true;
      }

      else if (side1 != side2 || side2 != side3 || side1 != side3) {
        return true;
      }
      else {
        return false;
      }
};

  $(document).ready(function() {
    $("form#triangleForm").submit(function(event) {
      var side1 = parseInt($("input#length1").val());
      var side2 = parseInt($("input#length2").val());
      var side3 = parseInt($("input#length3").val());

      var result = isTriangle(side1, side2, side3);

                 // same as writing if (result === false)
        // $(".output").text(equilateral);



    $("#result").show();
    event.preventDefault();
  });
});
