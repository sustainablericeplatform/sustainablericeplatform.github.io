$(document).ready(function() {
    if (getParameterByName('login') == 'false') {
        $('#login-failed').css('display', 'block')
    }
    $('form').on('submit', function(e) {
        e.preventDefault();
        var uname = $('input[type="text"]').val();
        var pword = $('input[type="password"]').val();

        if ( (uname == 'srpmember' &&  pword == 'weloverice!') ||
             (uname == 'srp_ahold' && pword == 'rice0001!') ||
             (uname == 'srp_afma' && pword == 'rice0002!') ||
             (uname == 'srp_aidenv' && pword == 'rice0003!') ||
             (uname == 'srp_akc' && pword == 'rice0004!') ||
             (uname == 'srp_amru' && pword == 'rice0005!') ||
             (uname == 'srp_brico' && pword == 'rice0007!') ||
             (uname == 'srp_bayer' && pword == 'rice0008!') ||
             (uname == 'srp_betgrn' && pword == 'rice0009!') ||
             (uname == 'srp_breta' && pword == 'rice0010!') ||
             (uname == 'srp_cod' && pword == 'rice0011@') ||
             (uname == 'srp_cfpn' && pword == 'rice0012@') ||
             (uname == 'srp_srd' && pword == 'rice0013@') ||
             (uname == 'srp_conuni' && pword == 'rice0014@') ||
             (uname == 'srp_daph' && pword == 'rice0015@') ||
             (uname == 'srp_denrph' && pword == 'rice0016@') ||
             (uname == 'srp_dow' && pword == 'rice0017@') ||
             (uname == 'srp_ebro' && pword == 'rice0018@') ||
             (uname == 'srp_engro' && pword == 'rice0019@') ||
             (uname == 'srp_fao' && pword == 'rice0020@') ||
             (uname == 'srp_fairint' && pword == 'rice0021#') ||
             (uname == 'srp_dgfcin' && pword == 'rice0022#') ||
             (uname == 'srp_gizbria' && pword == 'rice0023#') ||
             (uname == 'srp_galric' && pword == 'rice0024#') ||
             (uname == 'srp_gloric' && pword == 'rice0025#') ||
             (uname == 'srp_golric' && pword == 'rice0026#') ||
             (uname == 'srp_ipsard' && pword == 'rice0027#') ||
             (uname == 'srp_ifa' && pword == 'rice0028#') ||
             (uname == 'srp_ipni' && pword == 'rice0029#') ||
             (uname == 'srp_ipi' && pword == 'rice0030#') ||
             (uname == 'srp_ifc' && pword == 'rice0031$') ||
             (uname == 'srp_irri' && pword == 'rice0032$') ||
             (uname == 'srp_jebjes' && pword == 'rice0033$') ||
             (uname == 'srp_loctroi' && pword == 'rice0034$') ||
             (uname == 'srp_ldc' && pword == 'rice0035$') ||
             (uname == 'srp_ltf' && pword == 'rice0036$') ||
             (uname == 'srp_mars' && pword == 'rice0037$') ||
             (uname == 'srp_matco' && pword == 'rice0038$') ||
             (uname == 'srp_malimm' && pword == 'rice0039$') ||
             (uname == 'srp_mardvn' && pword == 'rice0040$') ||
             (uname == 'srp_maffkh' && pword == 'rice0041%') ||
             (uname == 'srp_natcap' && pword == 'rice0042%') ||
             (uname == 'srp_natpea' && pword == 'rice0043%') ||
             (uname == 'srp_nespad' && pword == 'rice0044%') ||
             (uname == 'srp_nesth' && pword == 'rice0045%') ||
             (uname == 'srp_naca' && pword == 'rice0046%') ||
             (uname == 'srp_olam' && pword == 'rice0047%') ||
             (uname == 'srp_prime' && pword == 'rice0048%') ||
             (uname == 'srp_pau' && pword == 'rice0049%') ||
             (uname == 'srp_rainall' && pword == 'rice0050%') ||
             (uname == 'srp_rbc' && pword == 'rice0051^') ||
             (uname == 'srp_soli' && pword == 'rice0052^') ||
             (uname == 'srp_rrdilk' && pword == 'rice0053^') ||
             (uname == 'srp_syngen' && pword == 'rice0054^') ||
             (uname == 'srp_tfp' && pword == 'rice0055^') ||
             (uname == 'srp_taneu' && pword == 'rice0056^') ||
             (uname == 'srp_thairice' && pword == 'rice0057^') ||
             (uname == 'srp_tilda' && pword == 'rice0058^') ||
             (uname == 'srp_unep' && pword == 'rice0059^') ||
             (uname == 'srp_upland' && pword == 'rice0060^') ||
             (uname == 'srp_utz' && pword == 'rice0061&') ||
             (uname == 'srp_vsr' && pword == 'rice0062&') ||
             (uname == 'srp_vdm' && pword == 'rice0063&') ||
             (uname == 'srp_veetee' && pword == 'rice0064&') ||
             (uname == 'srp_veco' && pword == 'rice0065&') ||
             (uname == 'srp_westmill' && pword == 'rice0066&') ||
             (uname == 'srp_wcskh' && pword == 'rice0067&') ||
             (uname == 'srp_wwfpk' && pword == 'rice0068&') ||
             (uname == 'srp_nrsp' && pword == 'rice0069&') ||
             (uname == 'srp_sunrice' && pword == 'rice0070&') ||
             (uname == 'srp_globgap' && pword == 'rice0071*') ||
             (uname == 'srp_frm' && pword == 'rice001') ||
             (uname == 'srp_npm' && pword == 'rice001') ||
             (uname == 'srp_gov' && pword == 'rice001') ||
             (uname == 'srp_ac' && pword == 'rice001') ||
             (uname == 'srp_wg' && pword == 'rice001') ||
             (uname == 'srp_nwg' && pword == 'rice001') ||
             (uname == 'srp_secretariat' && pword == 'riceisgood1') ) {
            Cookies.set('srp_login', 'true', {
                expires: 1
            });
            window.location = '/Members'
        } else {
            $('#wrong-username-password').css('display', 'block')
        }
    })
});

function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "))
}
