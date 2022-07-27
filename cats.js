$(function () {
  $.ajax({
    url: "cats.json",
    dataType: "json",
    type: "get",
    cache: false,
    success: parseJSON,
  });
});
//end on load

function parseJSON(data) {
  $(data.animals).each(function (index, value) {
    //create card template
    var screenpp = ("document", $(document).width());

    var MainCardDiv = $("<div />", {
      id: $(this).find("id").text(),

      title: "Click here for more info ....",
      class: "card",
    });

    var subCardBlockDiv = $("<div />", {
      class: "card-block text-xs-center",
    });

    var subCardBlockQuoteDiv = $("<div />", {
      class: "card-blockquote",
    });

    var atag = $("<a/>", {
      href:
        "https://www.petfinder.com//cat//" +
        value.name.toLowerCase() +
        "-" +
        value.id +
        "//de//newark//purringpals-rescue-inc-de54",
      target: "_blank",
      class: "divlink",
    });

    $("#ppcont").append(MainCardDiv);
    $(MainCardDiv).wrapInner(atag);
    var img = $("<img />", {
      class: "img-fluid card-img-top ",
      alt:
        $(this).find("age").text() +
        " adoptable cat " +
        $(this).find("breed").text(),

      src:
        "http://dl5zpyw5k3jeb.cloudfront.net//photos//pets//" +
        value.id +
        "//1//?bust=1567887690",
    });
    $(atag).wrapInner(img);

    $(atag).append(subCardBlockDiv);

    $(subCardBlockDiv).wrapInner(subCardBlockQuoteDiv);

    var cardTitle = $(
      "<h2/>",
      {
        class: "card-title",
      },
      "<h3/>"
    );

    var pfID = $("<h6/>", {}, "<h6/>");

    $(subCardBlockQuoteDiv).wrapInner(cardTitle, pfID);

    $(cardTitle).wrapInner(value.name);

    $(cardTitle).append(pfID);

    $(pfID).wrapInner("(Petfinder ID: " + value.id + ")");
  });
}
