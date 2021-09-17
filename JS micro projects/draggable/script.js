
  $(document).ready(function () {
    let checkedOptions = [];

    $.urlParam = function (name) {
      let results = new RegExp('[\?&]' + name + '=([^&#]*)')
        .exec(window.location.search);

      return (results !== null) ? results[1] || 0 : false;
    }

    let encodedPreference = $.urlParam('pszn');
    if (encodedPreference != false) {
      let decodedPreference = atob(encodedPreference);
      localStorage.orderDisplay = decodedPreference;
      $('.btn-share').attr("data-href", window.location.href + '?pszn=' + encodedPreference);

    }

    if (encodedPreference == false && localStorage.getItem('orderDisplay') === null) {
      $('.personalized-toggle').prop("checked", true);
      $('.btn-share').attr("data-href", window.location.href);
    }
    if (localStorage.getItem('orderDisplay') != null) {
      $('.btn-share').attr("data-href", window.location.href + '?pszn=' +btoa(localStorage.orderDisplay));
    }


    var dragAndDrop = {


      init: function () {

        self = this;
        this.dragula();

        if (localStorage.getItem('orderDisplay')) {
          this.store = JSON.parse(localStorage.orderDisplay).store;

          var nodesArray = Array.prototype.slice.call(document.querySelectorAll("#left > div"));
          this.store.forEach(function (obj) {
            document.getElementById(obj.container).appendChild(document.getElementById(obj.element));
          });
        }
      },



      dragula: function () {
        this.dragula = dragula([document.getElementById('left'), document.getElementById('right')],
          {
            copy: false,
          });
      }

    }

    dragAndDrop.init();

    const showHideXf = () => {
      //Hide unchecked XF's
      $(".personalized-toggle:checkbox:not(:checked)").each(function () {
        let containerId = $(this).closest('.card').attr('data-id');
        $('#' + containerId).closest('.experiencefragment').hide();
      });

      //Show checked XF's
      $(".personalized-toggle:checkbox:checked").each(function () {
        let containerId = $(this).closest('.card').attr('data-id');
        checkedOptions.push(containerId);
        $('#' + containerId).closest('.experiencefragment').show();
      });
    }

    const checkLocalStorage = () => {
      if (localStorage.getItem('orderDisplay') != null) {
        let displayLocal = JSON.parse(localStorage.orderDisplay).display;
        let orderLocal = JSON.parse(localStorage.orderDisplay).order;
        orderLocal.forEach((id, index) => {
          $('#' + id).closest('.experiencefragment').css("order", index);
        })

        displayLocal.forEach((dataId, index) => {
          $("[data-id='" + dataId + "']").find('.personalized-toggle').prop("checked", true);
        })
        showHideXf();

      }
    }
    checkLocalStorage();



    const saveToLocal = (order, display) => {

      localStorage.removeItem("orderDisplay");
      let store = [];
      order.forEach((dataId, index) => {
        store.push({ 'element': $("[data-id='" + dataId + "']").attr('id'), 'container': 'left' });
      });
      localStorage.store = JSON.stringify(store);

      let orderDisplay = {
        'display': display,
        'order': order,
        'store': store

      }
      localStorage.orderDisplay = JSON.stringify(orderDisplay);
      let encodedStorage = btoa(JSON.stringify(orderDisplay));
      $('.btn-share').attr("data-href", window.location.href + '?pszn=' + encodedStorage)
    }


    $('.save-selection').click((e) => {
      let orderArray = [];
      checkedOptions.length = 0;
      $('#left').children().each(function (i, v) {
        orderArray.push(($(v).data('id')))
      })
      //console.log(orderArray);

      //Change XF Order
      orderArray.forEach((id, i) => {
        $('#' + id).closest('.experiencefragment').css("order", i);
      })

      showHideXf();

      //console.log(checkedOptions);
      saveToLocal(orderArray, checkedOptions);
      $('.btn-close-white').click();
    })

    //Generate PDF
    var doc = new jsPDF();
    $('#pdf').click(function () {
      doc.fromHTML($('#orderable').html(), 15, 15, {
        'width': 170,
        'elementHandlers': true
      });
      doc.save('recruting_kit.pdf');

    });
    /*document.getElementById('pdf-test').addEventListener('click', async e => {
      let urlToSend = $('.btn-share').attr("data-href");

      let convertApi = ConvertApi.auth({ secret: 'wjwIOKv4JxdBr21F' })
      $('#pdf-test').text('Downloading...');

      try {

        // Converting web page to PDF file
        let params = convertApi.createParams()
        params.add('url', urlToSend)
        let result = await convertApi.convert('web', 'pdf', params)

        // Showing link with the result file
        var url = result.files[0].Url;
        $('.download_pdf').attr('href', url);
        
      } finally {
        document.getElementById("download-pdf").click();
        $('#pdf-test').text('Export as PDF');
      }


    }); */

    $('#pdf-test').click((e)=>{



        DocRaptor.createAndDownloadDoc("y3q6IVJsPLSKNM2tpQjZ", {
          name: "html-and-javascript",
          test: true, // test documents are free but watermarked
          //document_content: document.querySelector('#orderable').innerHTML,
          document_url: $('.btn-share').attr("data-href"), // or use a url
          document_type: "pdf",
          javascript: true // enables JavaScript processing
        });


	})



    $('.btn-share').click(function (e) {

      let shareURL = $(e.target).attr('data-href');
	  $('.send_email').attr('href', 'mailto:testing@platypusstudios.com?subject=Personalized Link&body='+shareURL);
       document.getElementById("send-email").click();

    });

  });

