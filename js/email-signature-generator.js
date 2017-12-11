jQuery(document).ready(function($){
  var exception_fields = $('.exception-fields');
  exception_fields.hide();
  
  $('#signature-name').focus(function(){
		$('.signature-hint').html('E.g. Sven Svensson');
	});
	$('#signature-title').focus(function(){
		$('.signature-hint').html('E.g. UX Designer');
	});	
	$('#signature-phone').focus(function(){
		$('.signature-hint').html('E.g. +46 8 586 302 00');
	});
	$('input').blur(function(){
		$('.signature-hint').html("");
	});

	$('#signature-office').change(function(){
		$('.signature-generate').prop("disabled", false);
		var officeval = $('#signature-office').val();
		if (officeval == 'germany' || officeval == 'karlsruhe') {
  		// Show exception
  		exception_fields.show();
		} else {
  		exception_fields.hide();
		}
	});
	$('#signature-personal-linkedin').blur(function(){
 		if ( $(this).val().length !== 0 ){
      $('#linkedin').prop("disabled", true);
			$('#linkedin').prop("checked", false);
			$('.linkedin-label').addClass('muted');
  		} else {
			$('#linkedin').prop("disabled", false);
			$('.linkedin-label').removeClass('muted');
	}
	});
	$('#signature-personal-twitter').blur(function(){
 		if ( $(this).val().length !== 0 ){
      $('#twitter').prop("disabled", true);
			$('#twitter').prop("checked", false);
			$('.twitter-label').addClass('muted');
  		} else {
			$('#twitter').prop("disabled", false);
			$('.twitter-label').removeClass('muted');
	}
	});
	//----
	$('.signature-generate').click(function(){
	  $('.steps-placeholder').toggle();
	  var name 		= $('#signature-name').val();
	  var phone 	= $('#signature-phone').val();
	  var cellphone = $('#signature-cellphone').val();
	  var title 	= $('#signature-title').val();
	  var office 	= $('#signature-office').val();
	  var url_ext 	= $('#signature-url-extension').val();
	  var personal_linkedin = $('#signature-personal-linkedin').val();
	  var personal_twitter = $('#signature-personal-twitter').val();
	  
	  var registration_number = $('#registration-number').val();
	  var general_manager = $('#general-manager').val();

	  var office_0, office_1, office_2;
	  var twitter = "";
	  var linkedin= "";
	  var facebook = "";
	  var extraField ="";
	  var exceptionrow = "";
	 if (office == 	"sthlm"){
	 	office_0 = 	"Projectplace International AB";
	 	office_1 = 	"Klarabergsgatan 60";
	 	office_2 = 	"SE-111 21 Stockholm";
	 } else if (office =="denmark"){
	 	office_0 = 	"Projectplace Denmark ApS";
	 	office_1 =	"Hollandsvej 12";
	 	office_2 = 	"2800 Kongens Lyngby, Denmark";
	 } else if (office =="germany"){
	 	office_0 = 	"Projectplace GmbH";
	 	office_1 =	"An der Welle 4";
	 	office_2 =	"60322 Frankfurt am Main, Germany";
	 	exceptionrow = "<tr><td style='padding-top:2px;'><span>" + registration_number + "</span><span style='color:#B9B9B9;font-size:small;font-weight:normal;display:inline-block;'>&nbsp;|&nbsp;</span><span>" + general_manager + "</span></td></tr>";
	 } else if (office =="bangalore"){
	 	office_0 =	"Projectplace India Pvt Ltd";
	 	office_1 =	"#21, Wood Street, 3rd Floor, Bearys Horizon Building";
	 	office_2 = 	"Bangalore - 560 025, India";
	 } else if (office =="nederlands"){
	 	office_0 = 	"Projectplace Nederland BV";
	 	office_1 =	"Kabelweg 57";
	 	office_2 =	"1014 BA Amsterdam, Netherlands";
	 } else if (office =="norway-oslo"){
	 	office_0 = 	"Projectplace Norge AS, Oslo";
	 	office_1 =	"Kongens gate 14";
	 	office_2 =	"0153 Oslo, Norway";
	 } else if (office =="uk"){
	 	office_0 = 	"Projectplace Ltd";
	 	office_1 =	"400 Thames Valley Park Drive";
	 	office_2 =	"Reading, UK, RG6 1PT";
	} else if (office == "austin") {
		office_1 =      "12301 Research Blvd., Research Park Plaza V, Ste. 101";
		office_2 =      " Austin, TX 78759";
	 } else if (office == "karlsruhe") {
		office_1 = "Gartenstrasse 67";
		office_2 = "76135 Karlsruhe, Germany";
		exceptionrow = "<span>" + registration_number + "</span><span style='color:#B9B9B9;font-size:small;font-weight:normal;display:inline-block;'>&nbsp;|&nbsp;</span><span>" + general_manager + "</span><br>";
	} else if (office == "france") {
		office_1 = "117, Avenue Victor Hugo";
		office_2 = "92100 Boulogne Billancourt, France";
	} else if (office == "italy") {
		office_1 = "Via di Vigna Murata, 40";
		office_2 = "00143 Roma, Italy";
	} else if (office == "asia-pacific") {
		office_1 = "Level 13 Macquarie House";
		office_2 = "167 Macquarie St, Sydney, NSW 2000, Australia";
	} else if (office == "ontario") {
		office_1 = "3281 Guasti Road, Suite 370";
		office_2 = "Ontario CA 91761";
	} else if (office == "cayman") {
		office_1 = "4th Floor harbor Centre";
		office_2 = "George Town, Grand Cayman, Cayman Islands";
	} else if (office == "haag") {
		office_1 = "Knobbelzwaansingel 5";
		office_2 = "2496 LN Den Haag, Netherlands";
	} else if (office == "atlanta") {
		office_1 = "1200 Abernathy Rd., Ste. 1700";
		office_2 = "Atlanta, GA  30328";
	} else if (office == "dallas") {
		office_1 = "3333 Lee Parkway, Ste. 600";
		office_2 = "Dallas, TX  75219";
	} else if (office == "annapolis") {
		office_1 = "130 Admiral Cochrane Dr., Room 267";
		office_2 = "Annapolis, MD 21401";
	} else if (office == "framingham") {
		office_1 = "945 Concord St., #208";
		office_2 = "Framingham, MA 01701";
	} else if (office == "sanfrancisco") {
		office_1 = "111 Sutter Street, Suite 300";
		office_2 = "San Francisco, CA 94104";
	}
	
	var linkedin_url = "https://www.linkedin.com/company/planview";
	var twitter_url = "https://twitter.com/planview";
	var facebook_url = "https://www.facebook.com/PlanviewCo/";
/* 
	if (url_ext == "planview.com" || url_ext == "planview.co.uk" || url_ext == "planview.de") {
		linkedin_url = "https://www.linkedin.com/company/planview";
		twitter_url = "https://twitter.com/planview";
		facebook_url = "https://www.facebook.com/PlanviewCo/";
	} else if (url_ext == "innotas.com") {
		linkedin_url = "https://www.linkedin.com/company/innotas";
		twitter_url = "https://twitter.com/innotas";
		facebook_url = "https://www.facebook.com/Innotas/";
	} else {
		linkedin_url = "http://www.linkedin.com/company/projectplace";
		twitter_url = "https://twitter.com/Projectplace";
		facebook_url = "http://www.facebook.com/projectplaceinternational";
	}
*/

	 if ( $('#linkedin').prop('checked') ) {
	 	linkedin = "<span style='color:#B9B9B9;font-size:small;display:inline-block;'>&nbsp;|&nbsp;</span><a href='" + linkedin_url + "' style='text-decoration: none;color: #B9B9B9;font-weight:bold;font-size:8pt;'>linkedin</a>";
	 } else if ( $('#signature-personal-linkedin').val() ){
	 	linkedin = "<span style='color:#B9B9B9;font-size:small;display:inline-block;'>&nbsp;|&nbsp;</span><a href='" + personal_linkedin + "' style='text-decoration: none;color: #B9B9B9;font-weight:bold;font-size:8pt;'>linkedin</a>";
	 } else {
	 	linkedin = "";
	 }

	 if ( $('#twitter').prop('checked') ) {
	 	twitter = "<span style='color:#B9B9B9;font-size:small;display:inline-block;'>&nbsp;|&nbsp;</span><a href='" + twitter_url + "' style='text-decoration: none;color: #B9B9B9;font-weight:bold;font-size:8pt;'>twitter</a>";
	 } else if ( $('#signature-personal-twitter').val() ){
	 	twitter = "<span style='color:#B9B9B9;font-size:small;display:inline-block;'>&nbsp;|&nbsp;</span><a href='" + personal_twitter + "' style='text-decoration: none;color: #B9B9B9;font-weight:bold;font-size:8pt;'>twitter</a>";
	 } else {
	 	twitter = "";
	 }

	if ( $('#facebook').prop('checked') ) {
		facebook = "<span style='color:#B9B9B9;font-size:small;display:inline-block;'>&nbsp;|&nbsp;</span><a href='" + facebook_url + "' style='text-decoration: none;color: #B9B9B9;font-weight:bold;font-size:8pt;'>facebook</a>";
	}
	
	var phonerow = "";
	if ( phone.length !== 0 && cellphone.length !== 0){
  	phonerow = "<span>T: "+ phone +"</span><span style='color:#B9B9B9;font-size:small;font-weight:normal;display:inline-block;'>&nbsp;|&nbsp;</span><span>C: "+ cellphone +"</span><br>";
	} else if ( phone.length !== 0 ) {
  	phonerow = "<span>T: "+ phone +"</span><br>";
	} else if ( cellphone.length !== 0 ) {
  	phonerow = "<span>C: "+ cellphone +"</span><br>";
	}

  extraField += linkedin + twitter + facebook;

	var logo = "https://styleguide.planview.com/wp-content/themes/pvstyle/img/email-signature/planview-logo-black.png";
  console.log('emailSignature');
  var emailSignature = "<font style='font-family: Arial, sans-serif;text-align:left;font-size:9pt;font-weight:normal;color:#000000;'><img src='" + logo + "' nosend='1' border='0' width='144' height='33' alt='Planview Inc' title='Planview Inc' style='width:144px;height:33px;margin-bottom:12px;'><br><span style='font-weight:bold;'>" + name + "</span><span style='color:#B9B9B9;font-size:small;font-weight:normal;display:inline-block;padding:0 4px;'>&nbsp;|&nbsp;</span><span>" + title +"</span><br><span>" + office_1 + "</span>, <span>" + office_2 + "</span><br>" + phonerow + exceptionrow + "<a style='text-decoration: none;color: #B9B9B9;font-weight:bold;font-size:8pt;' href='http://www."+ url_ext +"'>"+url_ext+"</a>"+extraField+"</font>";	  
  console.log(' = ');
  $('.signature-placeholder').html(emailSignature);
  console.log(emailSignature);
	});
});