/*!
 * Authentic Theme 18.31 (https://github.com/qooob/authentic-theme)
 * Copyright 2014-2017 Ilia Rostovtsev <programming@rostovtsev.ru>
 * Licensed under MIT (https://github.com/qooob/authentic-theme/blob/master/LICENSE)
 */
;
var $_url = $.url(t___wi.location),
    $__source_protocol = $_url.attr("protocol"),
    $__source_port = $_url.attr("port"),
    $__source_url = $_url.attr("source"),
    $__source_path = $_url.attr("path"),
    $___source_path = $_url.attr("path").replace(/^\//g, "").replace(/\/$/g, ""),
    $__source_file = $_url.attr("file"),
    $__source_dir = $_url.attr("directory"),
    $___source_dir = $_url.attr("directory").replace(/^\//g, "").replace(/\/$/g, ""),
    $__source_query = $_url.attr("query"),
    $source_path = $_url.attr("path").replace(/^\//g, ""),
    $__host_url = $_url.attr("host"),
    $__current_directory = $_url.attr("directory"),
    $__relative_url = $_url.attr("relative"),
    $___relative_url = $_url.attr("relative").replace(/^\//g, "").replace(/\/$/g, ""),
    $current_page = $_url.attr("path").replace(/^\//g, "").replace(/\/\//g, "/"),
    $current_directory = $__current_directory.replace(/^\//g, ""),
    $current_page_full = $_url.attr("path").replace(/\/\//g, "/"),
    $webprefix = $("body").data("webprefix"),
    $webprefix_full = "",
    $__source_host_complete = ($__source_protocol + "://" + $__host_url + ($__source_port ? ":" : "") + $__source_port + ("/" + $webprefix + $__source_path)).replace(/\/\//g, "/"),
    $access_level = t__wi_p.$("#wrapper").data("access-level"),
    $shell_level = ($access_level == 0 ? "#" : "$"),
    $load____type = t__wi_p.$("body").data("debug"),
    $load____ext = ($load____type == "debug" ? "src" : "min"),
    $t_av__usermin = $("body").data("usermin"),
    $t___license_vm = t__wi_p.$("#wrapper").data("virtual-server-license"),
    $t___license_cm = t__wi_p.$("#wrapper").data("server-manager-license"),
    $t_uri_virtualmin = t__wi_p.location.search == "?virtualmin" ? 1 : 0,
    $t_uri_cloudmin = t__wi_p.location.search == "?cloudmin" ? 1 : 0,
    $t_uri_webmail = t__wi_p.location.search == "?mail" ? 1 : 0,
    $t_uri_dashboard = t__wi_p.location.search == "?dashboard" ? 1 : 0,
    $g__v__title = t__wi_p.$("html head title").data("initial"),
    $g__v__nav = t__wi_p.$("aside").length,
    $g__user__ = $("body").data("user"),
    $g__m__name = $("body").data("module"),
    $g__t__ver = $("body").data("theme-version").toString(),
    $g__t__ver_str = $g__t__ver.replace(".", "");
const __ua__ = window.navigator.userAgent,
    ___is_iOS = (!!__ua__.match(/iPad/i) || !!__ua__.match(/iPhone/i)),
    ___is_webkit = (!!__ua__.match(/WebKit/i)),
    ___is_iOSSafari = (___is_iOS && ___is_webkit && !__ua__.match(/CriOS/i) && !__ua__.match(/OPiOS/i));
if ($webprefix) {
    $webprefix = ($webprefix + "/").replace(/\/\//g, "/");
    $webprefix_full = $webprefix;
    $webprefix_full = ($webprefix_full.replace(/\/$/g, "")).replace(/\/\//g, "/");
    if (!$webprefix_full.substr(0, 1) == "/") {
        $webprefix_full = "/" + $webprefix_full
    }
    if ($webprefix.substr(-1) == "/") {
        $webprefix = $webprefix.substr(0, $webprefix.length - 1)
    }
}
if ($current_page_full && $current_page_full.indexOf("/servers/link.cgi/") > -1) {
    $____link = $current_page_full.split("/");
    if (/^\d+$/.test($____link[3])) {
        $_____link = $____link[1] + "/" + $____link[2] + "/" + $____link[3];
        $webprefix = $webprefix + $_____link + "/";
        $webprefix_full = $webprefix_full + "/" + $_____link;
        $_____link = $webprefix;
        $_____link_full = $webprefix_full
    } else {
        $_____link = $webprefix;
        $_____link_full = (("/" + $webprefix.replace(/\/$/g, "")).replace(/\/\//g, "/")).replace(/\/$/g, "")
    }
} else {
    $_____link = $webprefix;
    $_____link_full = (("/" + $webprefix.replace(/\/$/g, "")).replace(/\/\//g, "/")).replace(/\/$/g, "")
}
if ($__source_host_complete.substr(-1) == "/") {
    $__source_host_complete = $__source_host_complete.substr(0, $__source_host_complete.length - 1)
}
if (t___wi.location === t__wi_p.location && $t_av__session) {
    $.ajax({
        type: "GET",
        url: $_____link_full + "/index.cgi/?xhr-get_theme_language=1",
        data: false,
        dataType: "text",
        async: $g__v__nav,
        success: function(a) {
            t__wi_p.$("body").data("language-strings", JSON.parse(a));
            typeof upd_labels === "function" && upd_labels()
        }
    });
    $.ajax({
        type: "GET",
        url: $_____link_full + "/index.cgi/?xhr-get_available_modules=1",
        data: false,
        dataType: "text",
        async: $g__v__nav,
        success: function(a) {
            t__wi_p.$("body").data("available-modules", JSON.parse(a))
        }
    });
    manageConfig("load")
}
var $g__o__f_m = ("file" + (is_module("file-manager") ? "-manager" : "min")),
    $g__e__path = $_____link_full + "/extensions";

function prt(b) {
    return console.log(b)
}(function(b) {
    b.fn.replaceTagName = function(n) {
        var m = [],
            l = this.length;
        while (l--) {
            var e = document.createElement(n),
                a = this[l],
                o = a.attributes;
            for (var p = o.length - 1; p >= 0; p--) {
                var i = o[p];
                e.setAttribute(i.name, i.value)
            }
            e.innerHTML = a.innerHTML;
            b(a).after(e).remove();
            m[l - 1] = e
        }
        return b(m)
    }
})(t___wi.jQuery);
jQuery.fn.selectText = function() {
    var d = document;
    var b = this[0];
    if (d.body.createTextRange) {
        var a = document.body.createTextRange();
        a.moveToElementText(b);
        a.select()
    } else {
        if (window.getSelection) {
            var c = window.getSelection();
            var a = document.createRange();
            a.selectNodeContents(b);
            c.removeAllRanges();
            c.addRange(a)
        }
    }
};
(function(a) {
    a.fn.replaceText = function(d, e, f) {
        return this.each(function() {
            var c = this.firstChild,
                b, h, i = [];
            if (c) {
                do {
                    if (c.nodeType === 3) {
                        b = c.nodeValue;
                        h = b.replace(d, e);
                        if (h !== b) {
                            if (!f && /</.test(h)) {
                                a(c).before(h);
                                i.push(c)
                            } else {
                                c.nodeValue = h
                            }
                        }
                    }
                } while (c = c.nextSibling)
            }
            i.length && a(i).remove()
        })
    }
})(jQuery);
(function(a) {
    a.fn.hasScrollBar = function() {
        return this.get(0).scrollHeight > this.height()
    }
})(jQuery);
$.fn.toggleCheckbox = function() {
    if ($(this).attr("type") == "checkbox") {
        $(this).prop("checked", !($(this).is(":checked")))
    }
};
jQuery.fn.confirmation = function(d, c) {
    d = $.extend({
        className: "btn-danger",
        timeout: 2500
    }, d);
    $(this).each(function(l, b) {
        var i, a = $(b),
            j = a.html();

        function k() {
            a.removeClass(d.className).data("confirmed", false).find(".tmp_question").remove()
        }
        a.data("confirmed", false);
        a.on("click.confirm", function(e) {
            e.preventDefault();
            if (a.data("confirmed")) {
                c.call(a, e);
                k()
            } else {
                a.data("confirmed", true);
                a.append('<em class="tmp_question">?</em>').addClass(d.className).bind("mouseout.confirm", function() {
                    i = setTimeout(k, d.timeout)
                }).bind("mouseover.confirm", function() {
                    clearTimeout(i)
                })
            }
        }).removeClass(d.className)
    });
    return $(this)
};

function passwordGenerator() {
    var e = settings_global_passgen_format.split("|")[1].split(","),
        d = parseInt(settings_global_passgen_format.split("|")[0]),
        b = "",
        a = "";
    if ($.inArray("a-z", e) >= 0) {
        b += "abcdefghijklmnopqrstuvwxyz"
    }
    if ($.inArray("A-Z", e) >= 0) {
        b += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if ($.inArray("0-9", e) >= 0) {
        b += "0123456789"
    }
    if ($.inArray("#", e) >= 0) {
        b += "![]{}()%&*$#^<>~@|"
    }
    for (var c = 0; c < d; c++) {
        a += b.charAt(Math.floor(Math.random() * b.length))
    }
    return a
}

function isEncodedURIComponent(a) {
    return decodeURIComponent(a) !== a
}

function encodeURIComponentSafe(a) {
    if (!isEncodedURIComponent(a)) {
        a = encodeURIComponent(a)
    }
    return a
}

function encodeURIParam(b, c) {
    var a = $.url(b).param(c);
    if (a) {
        b = b.replace(a, encodeURIComponentSafe(a));
        b = b.replace("//", "/")
    }
    return b
}

function HTMLDecode(a) {
    return $("<div></div>").html(a).text()
}

function get_cookie(b) {
    var e = b + "=";
    var a = document.cookie.split(";");
    for (var d = 0; d < a.length; d++) {
        var f = a[d];
        while (f.charAt(0) == " ") {
            f = f.substring(1, f.length)
        }
        if (f.indexOf(e) == 0) {
            return f.substring(e.length, f.length)
        }
    }
    return null
}

function array_swap(f) {
    var e = {};
    for (var d in f) {
        e[f[d]] = d
    }
    return e
}

function dblrclick(f) {
    var d = 0,
        e = false;
    return function(a) {
        if (e) {
            clearTimeout(d);
            e = false;
            return f.apply(this, arguments)
        } else {
            e = true;
            d = setTimeout(function() {
                e = false
            }, 300)
        }
    }
}

function ported_shell_clear_cmd(a) {
    a.val("");
    a.focus()
}

function ported_shell_open(a) {
    a.css("bottom", "0vh").addClass("opened");
    t__wi_p.ported_shell_size();
    setTimeout(function() {
        t__wi_p.focus();
        t__wi_p.$("body").find(".-shell-port- input").focus()
    }, 20)
}

function ported_shell_close(a) {
    a.css("bottom", "100vh").removeClass("opened")
}

function ported_shell_size() {
    if (is_module("shell") == 1) {
        var a = parseInt(t__wi_p.$("body").find(".-shell-port-cmd").width()),
            b = parseInt(t__wi_p.$("body").find(".-shell-port-type").width());
        t__wi_p.$("body").find('.-shell-port- input[data-command="true"]').css("width", (a - b - 10) + "px")
    }
}

function ported_shell_available() {
    var a = (product_name(1).toLowerCase() == "cloudmin" && t__wi_p.$('a[target="page"][href*="/server-manager/save_serv.cgi"][href*="shell=1"]').length);
    if (is_module("shell") == 1 || a) {
        return 1
    } else {
        return 0
    }
}

function ported_shell_menu_icon_ctl() {
    if (!ported_shell_available()) {
        t__wi_p.$(".user-link.ported-console").addClass("hidden")
    } else {
        if (settings_show_terminal_link != false) {
            t__wi_p.$(".user-link.ported-console").removeClass("hidden")
        }
    }
}

function t_uri_upd() {
    $t_uri_virtualmin = t__wi_p.location.search == "?virtualmin" ? 1 : 0, $t_uri_cloudmin = t__wi_p.location.search == "?cloudmin" ? 1 : 0, $t_uri_webmail = t__wi_p.location.search == "?mail" ? 1 : 0, $t_uri_dashboard = t__wi_p.location.search == "?dashboard" ? 1 : 0
}

function tab_action(d, c) {
    if (document.forms[0] && document.forms[0][d]) {
        document.forms[0][d].value = c
    }
}

function parse_bool(b) {
    return !(/^(false|0)$/i).test(b) && !!b
}
$(function() {
    var a;
    setInterval(function() {
        if (a == 0) {
            $(".blinking-default:not(.hidden)").css("opacity", "1");
            a = 1
        } else {
            if (a = 1) {
                $(".blinking-default:not(.hidden)").css("opacity", "0");
                a = 0
            }
        }
    }, 900)
});

function t__lo__btn_md() {
    return '<span class="cspinner in-btn-md" style="position: relative"><span class="cspinner-icon dark" style="width:12px; height:12px; margin-right: 7px;"></span></span>'
}

function __ie__() {
    var b = 0;
    var c = (/MSIE (\d+\.\d+);/.test(navigator.userAgent));
    var a = !!navigator.userAgent.match(/Trident\/7.0/);
    var d = navigator.userAgent.indexOf("rv:11.0");
    if (c) {
        b = new Number(RegExp.$1)
    }
    if (navigator.appVersion.indexOf("MSIE 10") != -1) {
        b = 10
    }
    if (a && d != -1) {
        b = 11
    }
    return b
}

function get_selected_text() {
    if (t___wi.getSelection) {
        return t___wi.getSelection().toString()
    } else {
        if (document.selection) {
            return document.selection.createRange().text
        }
    }
    return ""
}

function modal_dismiss() {
    $(".modal.in").find("[data-dismiss]").trigger("click")
}

function is_scrolled_into_view(d) {
    var b = $(d),
        g = $(window),
        f = g.scrollTop(),
        e = f + g.height(),
        a = b.offset().top,
        c = a + b.height();
    return ((c <= e) && (a >= f))
}

function search_control(b) {
    if (settings_hotkeys_active) {
        if (!(String.fromCharCode(b.which).toLowerCase() == settings_hotkey_focus_search && b[settings_hotkey_toggle_modifier])) {
            return true
        }
        b.preventDefault();
        $search = t__wi_p.$(".form-control.sidebar-search").focus();
        return false
    }
}

function access_level() {
    return t__wi_p.$("body").data("level")
}

function dashboard_switch() {
    if (t__wi_p.$("body").data("dashboard") == "1") {
        return true
    } else {
        return false
    }
}

function dashboard_switch_set() {
    t__wi_p.t__s("open_dashboard");
    t__wi_p.__cms();
    t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/sysinfo.cgi")
}

function messenger_hide(a) {
    if (typeof t__wi_p.window["Messenger_" + a] != "undefined") {
        t__wi_p.window["Messenger_" + a].hide()
    }
}

function messenger(d, j, e, i, h) {
    var g = (typeof i == "undefined" ? 1 : i),
        f = (typeof h == "undefined" ? true : h);
    if ($('body[class^="' + $g__o__f_m + '"]').length) {
        if (config_portable_module_filemanager_notification_type == "4" && e != "info" && e != "warning" && e != "error") {
            return
        } else {
            if (config_portable_module_filemanager_notification_type == "2" && e != "warning" && e != "error") {
                return
            }
        }
    }
    if (typeof t__wi_p.Messenger == "function") {
        t__wi_p.window["Messenger_" + g] = t__wi_p.Messenger().post({
            message: d,
            hideAfter: j,
            showCloseButton: f,
            type: e,
            id: g
        })
    }
}

function shortcut_control_checker(b) {
    if (access_level() == "0") {
        return true
    } else {
        if (is_module($.url(("/" + b)).attr("directory").replace(/\//g, ""))) {
            return true
        } else {
            return false
        }
    }
}

function shortcut_control(c) {
    if (settings_hotkeys_active) {
        if (settings_side_slider_enabled && settings_side_slider_tabs_hotkeys) {
            var d = $("#right-side-tabs .nav-tabs > li:not(.hidden)").length,
                b = $("#right-side-tabs .nav-tabs > li.active:not(.hidden)"),
                e = (b.next(":not(.hidden)").find("a:not(.hidden)").length ? b.next(":not(.hidden)").find("a:not(.hidden)") : b.parent("ul").find("li:not(.hidden)").first().find("a:not(.hidden)"));
            prev_tab = (b.prev(":not(.hidden)").find("a:not(.hidden)").length ? b.prev(":not(.hidden)").find("a:not(.hidden)") : b.parent("ul").find("li:not(.hidden)").last().find("a:not(.hidden)"));
            if (c.metaKey && c.shiftKey && c.which === 9) {
                if (d === 1) {
                    return
                }
                prev_tab.trigger("click")
            } else {
                if (c.metaKey && c.which === 9) {
                    if (d === 1) {
                        return
                    }
                    e.trigger("click")
                }
            }
        }
        if (!(String.fromCharCode(c.which) == "1" && settings_hotkey_custom_1 && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which) == "2" && settings_hotkey_custom_2 && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which) == "3" && settings_hotkey_custom_3 && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which) == "4" && settings_hotkey_custom_4 && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which) == "5" && settings_hotkey_custom_5 && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which) == "6" && settings_hotkey_custom_6 && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which) == "7" && settings_hotkey_custom_7 && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which) == "8" && settings_hotkey_custom_8 && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which) == "9" && settings_hotkey_custom_9 && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which).toLowerCase() == settings_hotkey_favorites && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which).toLowerCase() == settings_hotkey_shell && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which).toLowerCase() == settings_hotkey_sysinfo && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which).toLowerCase() == settings_hotkey_toggle_slider && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which).toLowerCase() == settings_hotkey_reload && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which).toLowerCase() == settings_hotkey_toggle_key_webmail && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which).toLowerCase() == settings_hotkey_toggle_key_usermin && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which).toLowerCase() == settings_hotkey_toggle_key_cloudmin && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which).toLowerCase() == settings_hotkey_toggle_key_virtualmin && c[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(c.which).toLowerCase() == settings_hotkey_toggle_key_webmin && c[settings_hotkey_toggle_modifier])) {
            return true
        }
        if (String.fromCharCode(c.which) == "1" && settings_hotkey_custom_1) {
            c.preventDefault();
            shortcut_control_checker(settings_hotkey_custom_1) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_1)
        }
        if (String.fromCharCode(c.which) == "2" && settings_hotkey_custom_2) {
            c.preventDefault();
            shortcut_control_checker(settings_hotkey_custom_2) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_2)
        }
        if (String.fromCharCode(c.which) == "3" && settings_hotkey_custom_3) {
            c.preventDefault();
            shortcut_control_checker(settings_hotkey_custom_3) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_3)
        }
        if (String.fromCharCode(c.which) == "4" && settings_hotkey_custom_4) {
            c.preventDefault();
            shortcut_control_checker(settings_hotkey_custom_4) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_4)
        }
        if (String.fromCharCode(c.which) == "5" && settings_hotkey_custom_5) {
            c.preventDefault();
            shortcut_control_checker(settings_hotkey_custom_5) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_5)
        }
        if (String.fromCharCode(c.which) == "6" && settings_hotkey_custom_6) {
            c.preventDefault();
            shortcut_control_checker(settings_hotkey_custom_6) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_6)
        }
        if (String.fromCharCode(c.which) == "7" && settings_hotkey_custom_7) {
            c.preventDefault();
            shortcut_control_checker(settings_hotkey_custom_7) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_7)
        }
        if (String.fromCharCode(c.which) == "8" && settings_hotkey_custom_8) {
            c.preventDefault();
            shortcut_control_checker(settings_hotkey_custom_8) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_8)
        }
        if (String.fromCharCode(c.which) == "9" && settings_hotkey_custom_9) {
            c.preventDefault();
            shortcut_control_checker(settings_hotkey_custom_9) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_9)
        }
        if (String.fromCharCode(c.which).toLowerCase() == settings_hotkey_toggle_key_webmin && t__wi_p.$('.switch-toggle input[id="open_webmin"]') && !t__wi_p.$('.switch-toggle input[id="open_webmin"]').is(":checked") && (product_name() != "Usermin" && product_name() != "Mail")) {
            c.preventDefault();
            t__wi_p.$('.switch-toggle input[id="open_webmin"]').trigger("click")
        }
        if (String.fromCharCode(c.which).toLowerCase() == settings_hotkey_toggle_key_virtualmin && t__wi_p.$('.switch-toggle input[id="open_virtualmin"]') && !t__wi_p.$('.switch-toggle input[id="open_virtualmin"]').is(":checked") && (product_name() != "Usermin" && product_name() != "Mail")) {
            c.preventDefault();
            t__wi_p.$('.switch-toggle input[id="open_virtualmin"]').trigger("click")
        }
        if (String.fromCharCode(c.which).toLowerCase() == settings_hotkey_toggle_key_cloudmin && t__wi_p.$('.switch-toggle input[id="open_cloudmin"]') && !t__wi_p.$('.switch-toggle input[id="open_cloudmin"]').is(":checked") && (product_name() != "Usermin" && product_name() != "Mail")) {
            c.preventDefault();
            t__wi_p.$('.switch-toggle input[id="open_cloudmin"]').trigger("click")
        }
        if (String.fromCharCode(c.which).toLowerCase() == settings_hotkey_toggle_key_usermin && t__wi_p.$('.switch-toggle input[id="open_usermin"]') && !t__wi_p.$('.switch-toggle input[id="open_usermin"]').is(":checked") && (product_name() != "Webmin" && product_name() != "Virtualmin" && product_name() != "Cloudmin")) {
            c.preventDefault();
            t__wi_p.$('.switch-toggle input[id="open_usermin"]').trigger("click")
        }
        if (String.fromCharCode(c.which).toLowerCase() == settings_hotkey_toggle_key_webmail && t__wi_p.$('.switch-toggle input[id="open_webmail"]') && !t__wi_p.$('.switch-toggle input[id="open_webmail"]').is(":checked") && (product_name() != "Webmin" && product_name() != "Virtualmin" && product_name() != "Cloudmin")) {
            c.preventDefault();
            t__wi_p.$('.switch-toggle input[id="open_webmail"]').trigger("click")
        }
        if (String.fromCharCode(c.which).toLowerCase() == settings_hotkey_toggle_slider) {
            c.preventDefault();
            t__wi_p.$(".right-side-tabs-toggler:not(.hidden)").trigger("click")
        }
        if (String.fromCharCode(c.which).toLowerCase() == settings_hotkey_reload && t__wi_p.$('.user-links a[data-refresh="true"]')) {
            c.preventDefault();
            if (t__wi_p.$('iframe[name="page"]').contents() && t__wi_p.$('iframe[name="page"]').get(0) && t__wi_p.$('iframe[name="page"]').contents().find('body[class*="' + t__wi_p.$('iframe[name="page"]').get(0).contentWindow.$g__o__f_m + '"]').length) {
                if (t__wi_p.$('iframe[name="page"]').contents()) {
                    t__wi_p.$('iframe[name="page"]').contents().find(".btn-group i.fa-refresh").parent("button").trigger("click")
                }
            } else {
                t__wi_p.$('.user-links a[data-refresh="true"]').trigger("click")
            }
        }
        var g = (product_name(1).toLowerCase() == "cloudmin" && t__wi_p.$('a[target="page"][href*="/server-manager/save_serv.cgi"][href*="shell=1"]').length);
        if (String.fromCharCode(c.which).toLowerCase() == settings_hotkey_shell && (is_module("shell") == 1 || g)) {
            c.preventDefault();
            var f = t__wi_p.$("body").find(".-shell-port-");
            if (f.hasClass("opened")) {
                ported_shell_close(f)
            } else {
                ported_shell_open(f)
            }
        }
        if (String.fromCharCode(c.which).toLowerCase() == settings_hotkey_sysinfo) {
            c.preventDefault();
            if (dashboard_switch() == true) {
                dashboard_switch_set()
            } else {
                t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/sysinfo.cgi")
            }
        }
        if (String.fromCharCode(c.which).toLowerCase() == settings_hotkey_favorites) {
            c.preventDefault();
            if (t__wi_p.$(".favorites-menu-outer").css("left") != "0px") {
                t__wi_p.$(".user-link.favorites").trigger("click")
            } else {
                t__wi_p.$(".favorites-menu-outer").removeClass("hover")
            }
        }
        return false
    }
}

function charset_warning() {
    var b = $("body").data("charset");
    if (b && b.toLowerCase().indexOf("utf") === -1 && localStorage.getItem($hostname + "-config_portable_theme_charset_warning_shown") != "true") {
        var a = '		<div class="modal fade7 modal-charset-warning" tabindex="-1" role="dialog">		  <div class="modal-dialog modal-sm">		    <div class="modal-content">		      <div class="modal-header background-danger background--bordered">		        <button type="button" class="close" data-dismiss="modal" aria-label="' + lang("theme_xhred_global_close") + '"><span aria-hidden="true">&times;</span></button>		        <h4 class="modal-title"><i class="fa fa-fw fa-exclamation-triangle">&nbsp;&nbsp;</i> ' + lang("theme_xhred_global_warning") + '</h4>		      </div>		      <div class="modal-body">		        <p>' + lang("theme_xhred_encoding_warning").replace("_hidden_", (product_name(true) == "Usermin" ? "hidden" : "")).replace("%prod", product_name_lang(true)).replace("%lang", $("body").data("language")).replace("%charset", $("body").data("charset")).replace("%link", $_____link_full + (product_name(true) == "Usermin" ? "/language" : "/webmin/edit_lang.cgi")) + "</p>		      </div>		    </div>		  </div>		</div>	";
        $("body").append(a);
        setTimeout(function() {
            if (!$("body").hasClass("modal-open")) {
                $(".modal-charset-warning").modal("show");
                $(".modal-charset-warning").on("click", ".modal-body a.label", function(c) {
                    $(".modal-charset-warning").modal("hide")
                });
                $(".modal-charset-warning").on("hide.bs.modal", function(c) {
                    localStorage.setItem($hostname + "-config_portable_theme_charset_warning_shown", "true");
                    t__wi_p.manageConfig("save")
                })
            }
        }, 2000)
    }
}

function right_module_title() {
    $_right_menu_title = t__wi_p.$('iframe[name="page"]').contents().find("#headln2c");
    if ($_right_menu_title.find("font").text().length) {
        return $_right_menu_title.find("font").text()
    } else {
        if ($_right_menu_title.text().length) {
            return $_right_menu_title.text().text()
        } else {
            return "->"
        }
    }
}

function t__s(b) {
    t__wi_p.$('.switch-toggle input:not([id="' + b + '"])').each(function() {
        $(this).removeAttr("checked")
    }).promise().done(function() {
        t__wi_p.$("#" + b).prop("checked", true)
    });
    if (b == "open_webmin" || b == "open_usermin") {
        t__wi_p.history.pushState(null, null, $_____link_full + "/");
        t__wi_p.$("#wrapper").data("virtual-server", -1);
        t__wi_p.$("#wrapper").data("server-manager", -1);
        t__wi_p.$("#wrapper").data("webmail", -1)
    } else {
        if (b == "open_dashboard") {
            t__wi_p.history.pushState(null, null, $_____link_full + "/?dashboard");
            t__wi_p.$("#wrapper").data("virtual-server", -1);
            t__wi_p.$("#wrapper").data("server-manager", -1);
            t__wi_p.$("#wrapper").data("webmail", -1)
        } else {
            if (b == "open_virtualmin") {
                t__wi_p.history.pushState(null, null, $_____link_full + "/?virtualmin");
                t__wi_p.$("#wrapper").data("virtual-server", 2);
                t__wi_p.$("#wrapper").data("server-manager", -1);
                t__wi_p.$("#wrapper").data("webmail", -1)
            } else {
                if (b == "open_cloudmin") {
                    t__wi_p.history.pushState(null, null, $_____link_full + "/?cloudmin");
                    t__wi_p.$("#wrapper").data("virtual-server", -1);
                    t__wi_p.$("#wrapper").data("server-manager", 2);
                    t__wi_p.$("#wrapper").data("webmail", -1)
                } else {
                    if (b == "open_webmail") {
                        t__wi_p.history.pushState(null, null, $_____link_full + "/?mail");
                        t__wi_p.$("#wrapper").data("virtual-server", -1);
                        t__wi_p.$("#wrapper").data("server-manager", -1);
                        t__wi_p.$("#wrapper").data("webmail", 2)
                    }
                }
            }
        }
    }
}

function hide_mobile_menu() {
    if (typeof jQuery().transition == "function" && (t__wi_p.$(".mobile-menu-toggler:visible").length && $(".mobile-menu-toggler").attr("style") && $(".mobile-menu-toggler").attr("style").indexOf("ease") == -1)) {
        if (t__wi_p.$(".__logo")) {
            t__wi_p.$(".__logo").transition({
                y: 0
            }, 1000)
        }
        t__wi_p.$("aside, .mobile-menu-toggler").transition({
            x: 0
        }, 300, function() {
            t__wi_p.$(".mobile-menu-toggler").removeClass("selected").find("button").removeClass("btn-primary").addClass("btn-primary");
            t__wi_p.$(".switch-toggle").css("display", "none");
            t__wi_p.$("aside").addClass("hidden-xs")
        })
    }
}

function f__l__filter_r() {
    var a = "-webkit-filter: grayscale(0) sepia(0) saturate(1) hue-rotate(0deg) invert(0) brightness(1) contrast(1); filter: grayscale(0) sepia(0) saturate(1) hue-rotate(0deg) invert(0) brightness(1) contrast(1);";
    t__wi_p.$(".visible-xs.mobile-menu-toggler").attr("style", "position: fixed;" + a);
    t__wi_p.$("aside, .visible-xs.mobile-menu-toggler").attr("style", "z-index: 10; overflow: visible; transform: translate(" + settings_leftmenu_width + "px, 0px);" + a);
    $('input[name="settings_grayscale_level_navigation"], input[name="settings_sepia_level_navigation"], input[name="settings_hue_level_navigation"], input[name="settings_invert_level_navigation"]').val(0);
    $('input[name="settings_saturate_level_navigation"], input[name="settings_brightness_level_navigation"], input[name="settings_contrast_level_navigation"]').val(1);
    var b = $('input[name="settings_grayscale_level_navigation"], input[name="settings_sepia_level_navigation"], input[name="settings_saturate_level_navigation"], input[name="settings_hue_level_navigation"], input[name="settings_invert_level_navigation"], input[name="settings_brightness_level_navigation"], input[name="settings_contrast_level_navigation"]');
    b.each(function() {
        $('code[data-name="' + $(this).attr("name") + '"]').text($(this).val())
    })
}

function f__c__filter_r() {
    var b = "-webkit-filter: grayscale(0) saturate(1) hue-rotate(0deg); filter: grayscale(0) saturate(1) hue-rotate(0deg);";
    $("body").attr("style", b);
    t__wi_p.$("#content .loading-container").attr("style", b);
    $('input[name="settings_grayscale_level_content"], input[name="settings_hue_level_content"]').val(0);
    $('input[name="settings_saturate_level_content"]').val(1);
    var a = $('input[name="settings_grayscale_level_content"], input[name="settings_saturate_level_content"], input[name="settings_hue_level_content"]');
    a.each(function() {
        $('code[data-name="' + $(this).attr("name") + '"]').text($(this).val())
    })
}

function t_sel_i() {
    if (t__wi_p.$(".form-control.sidebar-search").is(":focus")) {
        return
    }
    $.each($("aside select > option"), function() {
        var a = $(this).text().match(/^\s{0,4}/)[0].length,
            b = $(this).text();
        if (settings_leftmenu_vm_cm_dropdown_icons) {
            if (a === 4 && b.indexOf("↱") === -1) {
                $(this).html("&nbsp;&nbsp;&nbsp;&nbsp;↱&nbsp;" + b.replace(/\s/g, ""))
            } else {
                if (a === 2 && b.indexOf("↴") === -1) {
                    $(this).html("&nbsp;&nbsp;↴&nbsp;" + b.replace(/\s/g, ""))
                }
            }
        }
    }).promise().done(function() {
        var a = t__wi_p.$("aside select");
        if (a.length) {
            a.removeAttr("onchange disabled");
            a.data("select2") ? a.select2("destroy") : false;
            a.unbind("select2:select");
            a.select2({
                minimumResultsForSearch: (!$.browser.mobile ? 5 : -1)
            });
            setTimeout(function() {
                a.data("select2").open();
                a.data("select2").close()
            }, 1);
            $create_link = $('a.navigation_module_trigger[data-href^="/virtual-server/domain_form.cgi?generic=1&amp;gparent="]');
            if (!$.url($create_link.data("href")).param("gparent")) {
                $create_link.data("href", $create_link.data("href") + a.val())
            }
            a.on("select2:select", function(b) {
                if (b.currentTarget.id === "dom") {
                    t__vm_l(b.currentTarget.value);
                    t_vm_r(b.currentTarget.value)
                } else {
                    if (b.currentTarget.id === "sid") {
                        t__cm_l(b.currentTarget.value);
                        t_cm_r(b.currentTarget.value)
                    }
                }
            });
            a.on("select2:open", function(b) {
                $.each($("select > option"), function() {
                    if ($(this).attr("style") && $(this).attr("style").indexOf("italic") > -1) {
                        var c = $(this);
                        setTimeout(function() {
                            t__wi_p.$("body").find('li[id$="' + c.attr("value") + '"]').attr("style", "color: #e73c38 !important;")
                        }, 1)
                    }
                })
            });
            if (t__wi_p.$("aside select option").length === 1) {
                t__wi_p.$(".select2 span").css("cursor", "default");
                t__wi_p.$(".select2 .select2-selection__arrow").remove();
                a.on("select2:open", function() {
                    t__wi_p.$(".select2-container .select2-dropdown").css("opacity", "0")
                })
            }
            $.each($("aside select > option"), function() {
                if ($(this).attr("style") && $(this).attr("style").indexOf("italic") > -1) {
                    if (t__wi_p.$(".select2-selection > .select2-selection__rendered").text().trim() == $(this).text().trim()) {
                        t__wi_p.$(".select2-selection > .select2-selection__rendered").attr("style", "color: #e97471 !important;")
                    }
                }
            })
        }
    })
}

function __mss() {
    if (product_name(1).toLowerCase() == "cloudmin") {
        if (t__wi_p.$("aside").find("li.menu-container.menu-status.hidden").find("font").length > 0) {
            var f = t__wi_p.$("aside").find("li.menu-container.menu-status.hidden").find("font"),
                e = f.text(),
                d = f.attr("color");
            if (d && (d.indexOf("00ff00") || d.indexOf("008800") || d.indexOf("00aa00"))) {
                d = "success"
            } else {
                if (d && (d.indexOf("ff6600") || d.indexOf("ff00ff") || d.indexOf("ff22ff") || d.indexOf("ff44ff"))) {
                    d = "warning"
                } else {
                    if (d && (d.indexOf("ff0000") || d.indexOf("ff1100") || d.indexOf("aa0000") || d.indexOf("ff2200") || d.indexOf("ff4400"))) {
                        d = "danger"
                    } else {
                        d = "info"
                    }
                }
            }
            if (e == "Virtualmin") {
                e = "VM"
            }
            setTimeout(function() {
                var a = t__wi_p.$("aside .select2-selection__rendered");
                if (!a.find(".menu-status-label").length) {
                    a.append('<span class="pull-right label label-' + d + ' menu-status-label bg-light-grey pointer-events-none">' + e + "</span>");
                    var b = t__wi_p.$("aside .select2-selection__rendered .menu-status-label");
                    b.animate({
                        opacity: 1
                    }, 500);
                    b.on("mouseover", function() {
                        $(this).removeClass("bg-light-grey")
                    }).on("mouseout", function() {
                        $(this).addClass("bg-light-grey")
                    });
                    a.on("mouseover", function() {
                        $(this).find(".menu-status-label").removeClass("bg-light-grey")
                    }).on("mouseout", function() {
                        $(this).find(".menu-status-label").addClass("bg-light-grey")
                    })
                }
            }, 300)
        }
    }
}

function f__l_reload() {
    var a = t__wi_p.$t_uri_virtualmin ? "virtualmin" : t__wi_p.$t_uri_cloudmin ? "cloudmin" : "webmin";
    if (a == "webmin") {
        t__wi_p.t__s("open_webmin");
        t__wm_l("open_webmin")
    } else {
        if (a == "virtualmin") {
            t__wi_p.t__s("open_virtualmin");
            t__vm_l(t__wi_p.$("aside select").val())
        } else {
            if (a == "cloudmin") {
                t__wi_p.t__s("open_cloudmin");
                t__cm_l(t__wi_p.$("aside select").val())
            }
        }
    }
}

function __lls() {
    if (t__wi_p.$___ajax_requested_url === "___blocked") {
        return
    }
    t__wi_p.t___p__ll = 1;
    if (settings_loader_top && t__wi_p.t___p__xhr_r === 0) {
        if (typeof NProgress == "object" && typeof t__wi_p != "undefined") {
            t__wi_p.NProgress.remove();
            t__wi_p.NProgress.start()
        }
    }
    t__wi_p.$(".mCSB_container, .mCSB_dragger").css("top", "0");
    !t__wi_p.$("#_menu_loader").length && t__wi_p.$("body ul.navigation").before('<span id="_menu_loader" class="loading loading-sm"></span>');
    !t__wi_p.$("#loader-close-sm").length && t__wi_p.$("#_menu_loader").before('<div class="loader-close sm hidden" id="loader-close-sm"><i class="fa fa-fw fa-times-circle pull-right hidden scale-08"></i></div>');
    t__wi_p.setTimeout(function() {
        t__wi_p.$("#loader-close-sm").removeClass("hidden")
    }, 3000);
    t__wi_p.$("body aside .mCSB_scrollTools").css("visibility", "hidden");
    t__wi_p.$("body ul.navigation").css("visibility", "hidden");
    t__wi_p.$("body ul.user-links").css("visibility", "hidden");
    t__wi_p.$("aside ul.user-html").addClass("invisible")
}

function __lle() {
    t__wi_p.$("aside ul.user-html").removeClass("invisible");
    if (settings_loader_top && t__wi_p.t___p__xhr_r === 0 && __num()) {
        if (typeof NProgress == "object" && typeof t__wi_p != "undefined") {
            t__wi_p.NProgress.done()
        }
    }
    t__wi_p.$___ajax_requested_url = "_blank";
    t__wi_p.$("body aside .mCSB_scrollTools").css("visibility", "visible");
    t__wi_p.$("body ul.navigation").css("visibility", "visible");
    t__wi_p.$("body ul.user-links").css("visibility", "visible");
    t__wi_p.$("#_menu_loader").remove();
    t__wi_p.$("#loader-close-sm").remove();
    t__wi_p.t_sel_i();
    __mss();
    if (t__wi_p.$('iframe[name="page"]').get(0) && typeof t__wi_p.$('iframe[name="page"]').get(0).contentWindow.__dlm == "function") {
        $('iframe[name="page"]').get(0).contentWindow.__dlm()
    }
    t__wi_p.t___p__ll = 0
}

function t__au__c___i(t, e) {
    if (t == "c") {
        t__wi_p.$(".autocomplete-suggestions").remove();
        t__wi_p.$(".form-control.sidebar-search").removeAttr("disabled");
        t__wi_p.$(".form-control.sidebar-search").autocomplete("dispose");
        t__wi_p.$(".form-control.sidebar-search").val("");
        if (e) {
            return
        }
    }
    var o = {};
    $.each(t__wi_p.$('li:not(.menu-exclude):not(.user-link) > ul[id^="global_"].sub > li:not(.menu-exclude):not(.user-link) > a'), function(a, b) {
        o[($(this).attr("href").substring(0, 1) == "/" ? "" : "/") + $(this).attr("href")] = $.trim($(this).text())
    });
    t__wi_p.$('li > a[target="page"][data-href="/virtual-server/index.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/sysinfo.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/virtual-server/history.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/mailbox/list_folders.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/mailbox/list_ifolders.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/mailbox/list_addresses.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/filter/edit_forward.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/filter/edit_auto.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/filter/edit_auto.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/filter/"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/mailbox/edit_sig.cgi"]').each(function(a, b) {
        o[$(this).attr("data-href")] = $.trim($(this).text())
    });
    var s = $.map(o, function(b, a) {
        if (a != "undefined") {
            return {
                value: b,
                url: a,
                data: {
                    category: product_name_lang(1)
                }
            }
        }
    });
    var n = {};
    if ($current_page_full == $_____link_full + "/custom/" || $current_page_full == $_____link_full + "/custom/index.cgi" || $current_page_full == $_____link_full + "/backup-config/" || $current_page_full == $_____link_full + "/backup-config/index.cgi" || $current_page_full == $_____link_full + "/usermin/" || $current_page_full == $_____link_full + "/usermin/index.cgi" || $current_page_full == $_____link_full + "/webmin/" || $current_page_full == $_____link_full + "/webmin/index.cgi" || $current_page_full == $_____link_full + "/acl/" || $current_page_full == $_____link_full + "/acl/index.cgi" || $current_page_full == $_____link_full + "/init/" || $current_page_full == $_____link_full + "/init/index.cgi" || $current_page_full == $_____link_full + "/mount/" || $current_page_full == $_____link_full + "/mount/index.cgi" || $current_page_full == $_____link_full + "/quota/" || $current_page_full == $_____link_full + "/quota/index.cgi" || $current_page_full == $_____link_full + "/fsdump/" || $current_page_full == $_____link_full + "/fsdump/index.cgi" || $current_page_full == $_____link_full + "/inittab/" || $current_page_full == $_____link_full + "/inittab/index.cgi" || $current_page_full == $_____link_full + "/logrotate/" || $current_page_full == $_____link_full + "/logrotate/index.cgi" || $current_page_full == $_____link_full + "/mailcap/" || $current_page_full == $_____link_full + "/mailcap/index.cgi" || $current_page_full == $_____link_full + "/pam/" || $current_page_full == $_____link_full + "/pam/index.cgi" || $current_page_full == $_____link_full + "/proc/" || $current_page_full == $_____link_full + "/proc/index_tree.cgi" || $current_page_full == $_____link_full + "/proc/index_user.cgi" || $current_page_full == $_____link_full + "/proc/index_size.cgi" || $current_page_full == $_____link_full + "/proc/index_cpu.cgi" || $current_page_full == $_____link_full + "/proc/index_tree.cgi" || $current_page_full == $_____link_full + "/proc/index_search.cgi" || $current_page_full == $_____link_full + "/cron/" || $current_page_full == $_____link_full + "/cron/index.cgi" || $current_page_full == $_____link_full + "/syslog/" || $current_page_full == $_____link_full + "/syslog/index.cgi" || $current_page_full == $_____link_full + "/useradmin/" || $current_page_full == $_____link_full + "/useradmin/index.cgi" || $current_page_full == $_____link_full + "/apache/" || $current_page_full == $_____link_full + "/apache/index.cgi" || $current_page_full == $_____link_full + "/bind8/" || $current_page_full == $_____link_full + "/bind8/index.cgi" || $current_page_full == $_____link_full + "/dhcpd/" || $current_page_full == $_____link_full + "/dhcpd/index.cgi" || $current_page_full == $_____link_full + "/dovecot/" || $current_page_full == $_____link_full + "/dovecot/index.cgi" || $current_page_full == $_____link_full + "/ldap-server/" || $current_page_full == $_____link_full + "/ldap-server/index.cgi" || $current_page_full == $_____link_full + "/virtualmin-nginx/" || $current_page_full == $_____link_full + "/virtualmin-nginx/index.cgi" || $current_page_full == $_____link_full + "/fetchmail/" || $current_page_full == $_____link_full + "/fetchmail/index.cgi" || $current_page_full == $_____link_full + "/mysql/" || $current_page_full == $_____link_full + "/mysql/index.cgi" || $current_page_full == $_____link_full + "/mysql/edit_dbase.cgi" || $current_page_full == $_____link_full + "/postgresql/" || $current_page_full == $_____link_full + "/postgresql/index.cgi" || $current_page_full == $_____link_full + "/postgresql/edit_dbase.cgi" || $current_page_full == $_____link_full + "/postfix/" || $current_page_full == $_____link_full + "/postfix/index.cgi" || $current_page_full == $_____link_full + "/procmail/" || $current_page_full == $_____link_full + "/procmail/index.cgi" || $current_page_full == $_____link_full + "/proftpd/" || $current_page_full == $_____link_full + "/proftpd/index.cgi" || $current_page_full == $_____link_full + "/mailboxes/" || $current_page_full == $_____link_full + "/mailboxes/index.cgi" || $current_page_full == $_____link_full + "/mailboxes/list_mail.cgi" || $current_page_full == $_____link_full + "/mailbox/" || $current_page_full == $_____link_full + "/mailbox/index.cgi" || $current_page_full == $_____link_full + "/samba/" || $current_page_full == $_____link_full + "/samba/index.cgi" || $current_page_full == $_____link_full + "/spam/" || $current_page_full == $_____link_full + "/spam/index.cgi" || $current_page_full == $_____link_full + "/squid/" || $current_page_full == $_____link_full + "/squid/index.cgi" || $current_page_full == $_____link_full + "/sshd/" || $current_page_full == $_____link_full + "/sshd/index.cgi" || $current_page_full == $_____link_full + "/webalizer/" || $current_page_full == $_____link_full + "/webalizer/index.cgi" || $current_page_full == $_____link_full + "/cpan/" || $current_page_full == $_____link_full + "/cpan/index.cgi" || $current_page_full == $_____link_full + "/htaccess-htpasswd/" || $current_page_full == $_____link_full + "/htaccess-htpasswd/index.cgi" || $current_page_full == $_____link_full + "/status/" || $current_page_full == $_____link_full + "/status/index.cgi" || $current_page_full == $_____link_full + "/net/" || $current_page_full == $_____link_full + "/net/index.cgi" || $current_page_full == $_____link_full + "/tcpwrappers/" || $current_page_full == $_____link_full + "/tcpwrappers/index.cgi" || $current_page_full == $_____link_full + "/fdisk/" || $current_page_full == $_____link_full + "/fdisk/index.cgi" || $current_page_full == $_____link_full + "/fail2ban/" || $current_page_full == $_____link_full + "/fail2ban/index.cgi" || $current_page_full == $_____link_full + "/nis/" || $current_page_full == $_____link_full + "/nis/index.cgi" || $current_page_full == $_____link_full + "/passwd/" || $current_page_full == $_____link_full + "/passwd/index.cgi") {
        $(t__wi_p.$('iframe[name="page"]').contents().find(".panel-body a[href]:not([href*='javascript'],[href*='list_users.cgi?dom'],[href*='edit_hdparm.cgi?disk'],[href*='blink.cgi?disk'],[href*='smart-status/index.cgi?drive'],[href*='help.cgi'],[href*='edit_user.cgi?new='],[href*='edit_user.cgi?idx='],[href*='edit_recipe.cgi'],[href*='up.cgi'],[href*='down.cgi'],[href*='virt_index.cgi'],[href*='save_log.cgi'],[href*='backup.cgi'],[href*='activate.cgi'],[href*='#'])")).each(function(a, b) {
            if ($current_page_full == $_____link_full + "/syslog/" || $current_page_full == $_____link_full + "/syslog/index.cgi") {
                n["/" + $current_page + $(this).parent("td").next("td.td_tag").next("td.td_tag").next("td.td_tag").find("a").attr("href")] = $.trim($(this).text())
            } else {
                if ($current_page_full == $_____link_full + "/backup-config/" || $current_page_full == $_____link_full + "/backup-config/index.cgi") {
                    $description = $.trim($(this).parent("td").next("td.td_tag").next("td.td_tag").text())
                } else {
                    if ($current_page_full == $_____link_full + "/mount/" || $current_page_full == $_____link_full + "/mount/index.cgi" || $current_page_full == $_____link_full + "/quota/" || $current_page_full == $_____link_full + "/quota/index.cgi") {
                        $description = $.trim($(this).parent("td").next("td.td_tag").next("td.td_tag").text())
                    } else {
                        if ($current_page_full == $_____link_full + "/fsdump/" || $current_page_full == $_____link_full + "/fsdump/index.cgi") {
                            $description = $.trim($(this).parents("td").next("td").next("td").next("td").find("label").find("tt").find("tt").text())
                        } else {
                            if ($current_page_full == $_____link_full + "/proc/" || $current_page_full == $_____link_full + "/proc/index_tree.cgi" || $current_page_full == $_____link_full + "/proc/index_user.cgi" || $current_page_full == $_____link_full + "/proc/index_size.cgi" || $current_page_full == $_____link_full + "/proc/index_cpu.cgi" || $current_page_full == $_____link_full + "/proc/index_tree.cgi" || $current_page_full == $_____link_full + "/proc/index_search.cgi") {
                                if ($current_page_full == $_____link_full + "/proc/index_size.cgi" || $current_page_full == $_____link_full + "/proc/index_cpu.cgi") {
                                    $description = $.trim($(this).parent("td").next("td.td_tag").text()) + " — " + $.trim($(this).parent("td").next("td.td_tag").next("td.td_tag").text()) + " - " + $.trim($(this).parents("td").next("td").next("td").next("td").text())
                                } else {
                                    if ($current_page_full == $_____link_full + "/proc/index_search.cgi") {
                                        $description = $.trim($(this).parent("td").next("td.td_tag").text()) + " — " + $.trim($(this).parent("td").next("td.td_tag").next("td.td_tag").text()) + " - " + $.trim($(this).parents("td").next("td").next("td").next("td").next("td").text())
                                    } else {
                                        $description = $.trim($(this).parent("td").next("td.td_tag").text()) + " — " + $.trim($(this).parents("td").next("td").next("td").next("td").text())
                                    }
                                }
                            } else {
                                if ($current_page_full == $_____link_full + "/useradmin/" || $current_page_full == $_____link_full + "/useradmin/index.cgi") {
                                    $description = $.trim($(this).parents("td").next("td").find("label").text()) + " — " + $(this).text() + ":" + $.trim($(this).parents("td").next("td").next("td").find("label").text()) + " - " + $.trim($(this).parents("td").next("td").next("td").next("td").next("td").find("label").text()) + ", " + $.trim($(this).parents("td").next("td").next("td").next("td").next("td").next("td").find("label").text())
                                } else {
                                    if ($current_page_full == $_____link_full + "/mailboxes/list_mail.cgi" || $current_page_full == $_____link_full + "/mailbox/" || $current_page_full == $_____link_full + "/mailbox/index.cgi") {
                                        $description = $.trim($(this).parents("td").next("td").next("td").next("td").find("label").text()) + " — " + $.trim($(this).parents("td").next("td").find("label").text()) + " [" + $.trim($(this).parents("td").next("td").next("td").find("label").text()) + "]"
                                    } else {
                                        if ($current_page_full == $_____link_full + "/cpan/" || $current_page_full == $_____link_full + "/cpan/index.cgi") {
                                            $description = $.trim($(this).parents("td").next("td").next("td").find("label").text())
                                        } else {
                                            if ($current_page_full == $_____link_full + "/fdisk/" || $current_page_full == $_____link_full + "/fdisk/index.cgi") {
                                                $description = $.trim($(this).parent("td").next("td.td_tag").text()) + " - " + $.trim($(this).parent("td").next("td.td_tag").next("td.td_tag").text())
                                            } else {
                                                $description = $.trim($(this).parent("td").next("td.td_tag").text())
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                $description ? $_description = true : $_description = false;
                n[($(this).attr("href").substring(0, 1) == "/" ? "" : "/") + $current_directory + $(this).attr("href")] = $.trim($(this).text()) + ($_description ? " (" : "") + $description + ($_description ? ")" : "")
            }
        })
    }
    var m = $.map(n, function(b, a) {
        if (a != "undefined") {
            return {
                value: b,
                url: a,
                data: {
                    category: right_module_title()
                }
            }
        }
    });
    var i = {};
    $.each(t__wi_p.$('li:not(.menu-exclude):not(.user-link) > ul.sub:not([id^="global_"]) > li:not(.menu-exclude):not(.user-link) > a'), function(a, b) {
        i[($(this).attr("href").substring(0, 1) == "/" ? "" : "/") + $(this).attr("href")] = $.trim($(this).text())
    });
    t__wi_p.$('li:not(.menu-exclude):not(.user-link) > a[target="page"]:not([data-href="/acl/edit_user.cgi"],[data-href="/virtual-server/index.cgi"],[data-href="/sysinfo.cgi"],[data-href="/virtual-server/history.cgi"], [data-href="/mailbox/list_folders.cgi"], [data-href="/mailbox/list_ifolders.cgi"], [data-href="/mailbox/list_addresses.cgi"], [data-href="/filter/edit_forward.cgi"], [data-href="/filter/edit_auto.cgi"], [data-href="/filter/edit_auto.cgi"], [data-href="/filter/"], [data-href="/mailbox/edit_sig.cgi"])').each(function(a, b) {
        if (product_name(1).toLowerCase() != "usermin" && !dashboard_switch()) {
            i[$(this).attr("data-href")] = $.trim($(this).text())
        }
    });
    var u = $.map(i, function(b, a) {
        if (a != "undefined") {
            return {
                value: b,
                url: a,
                data: {
                    category: t__wi_p.$("aside .select2-selection__rendered").text() ? '<span style="font-style: italic">' + t__wi_p.$("aside .select2-selection__rendered").clone().children().remove().end().text() + "</span>" : product_name_lang(0)
                }
            }
        }
    });
    var r = {};
    t__wi_p.$("aside select option").each(function() {
        r[$(this).val() + ":::" + $(this).parent("select").attr("name")] = $.trim($(this).text())
    });
    var p = $.map(r, function(b, a) {
        if (a != "undefined") {
            return {
                value: b,
                url: a,
                data: {
                    category: t__wi_p.$("aside select").data("autocomplete-title")
                }
            }
        }
    });
    if (t__wi_p.location.search) {
        var q = u.concat(m).concat(p).concat(s)
    } else {
        var q = p.concat(m).concat(u).concat(s)
    }
    t__wi_p.$(".form-control.sidebar-search").on("keydown", function(a) {
        if (a.keyCode == 34 || a.keyCode == 33 || a.keyCode == 20 || a.keyCode == 17 || a.keyCode == 16 || a.keyCode == 9) {
            a.preventDefault();
            a.stopPropagation()
        }
    });
    t__wi_p.$(".form-control.sidebar-search").autocomplete({
        lookup: q,
        onSelect: function(a) {
            if (dashboard_switch() === true && t__wi_p.location.search === "?dashboard" && access_level() != 2 && access_level() != 4) {
                t__wi_p.t__s("open_webmin")
            }
            $(this).val("").blur();
            hide_mobile_menu();
            if (a.url.substring(0, 1) == "/") {
                var b = t__wi_p.$("body").find('a[href="' + a.url + '"]').attr("target");
                if (b && b == "_parent") {
                    t__wi_p.location.href = t__wi_p.$("body").find('a[href="' + a.url + '"]').attr("href")
                } else {
                    t__wi_p.$('iframe[name="page"]').attr("src", a.url.indexOf($_____link_full) > -1 ? a.url : $_____link_full + a.url)
                }
            } else {
                if (a.url && a.url.indexOf(":::") > -1) {
                    t__wi_p.__lls();
                    t__wi_p.$("select").val(a.url.split(":::")[0]).trigger("change").trigger("select2:select")
                } else {}
            }
        },
        groupBy: "category"
    })
}

function __p__pe_sm() {
    if (($('textarea[name="data"], textarea[name="text"], textarea[name="directives"], textarea[name="manual"]').length === 1) && ($('textarea[name="data"], textarea[name="text"], textarea[name="directives"], textarea[name="manual"]').parents("form").find('input[type="submit"]').length === 1)) {
        if (!$(".CodeMirror").length) {
            return
        }
        $(".ui_reset").remove();
        var c = $('textarea[name="data"], textarea[name="text"], textarea[name="directives"], textarea[name="manual"]').parents("form"),
            i = c.find('button[type="button"]').length ? c.find('button[type="button"]') : c.find('input[type="submit"]'),
            d = '<i class="fa fa-fw fa-floppy-o">&nbsp;&nbsp;</i>',
            b = ($('textarea[name="directives"]').length ? "-12px" : "0"),
            f = ($("select").val() ? $("select").val() : ($(".table-title").text() ? $(".table-title").text() : ($(".panel-body tt:first").text() ? $(".panel-body tt:first").text() : ($("#headln2c tt:first").text() ? $("#headln2c tt:first").text() : "")))),
            h = '<span class="cspinner_container" style="position: absolute; width: 18px; height: 14px; display: inline-block;"><span class="cspinner" style="margin-top: -0.5px; margin-left: -28px;"><span class="cspinner-icon white small"></span></span></span>',
            g = '<span class="cspinner_container" style="position: absolute; width: 18px; height: 14px; display: inline-block;"><span class="cspinner" style="margin-top: -0.5px; margin-left: -28px;"><span class="cspinner-icon dark small"></span></span></span>';
        i.parents("table.ui_form_end_buttons").prev("br").remove();
        i.parents("table.ui_form_end_buttons").prev("div.table-responsive").attr("style", "margin-bottom: -4px !important");
        i.replaceWith('			<span class="btn-group" style="margin-top: ' + b + '">				<button type="button" class="btn btn-success btn-34 margined-top-5" data-form="submitter" data-form-onbeforeunload="0">' + d + lang("theme_xhred_global_save") + '&nbsp;</button>				<button type="submit" class="btn btn-default btn-34 margined-top-5"><i class="fa fa-fw fa-arrow-circle-o-left">&nbsp;&nbsp;</i>' + lang("theme_xhred_global_save_and_close") + "&nbsp;</button>			</span>		");
        var a = $('button[type="button"]:not(.ui_form_end_submit)'),
            e = $('button[type="submit"]:not(.ui_form_end_submit)');
        window.__cm_editor_static.on("change", function(k, j) {
            __cm_editor_static.save();
            a.addClass("btn-warning").removeClass("btn-success").attr("data-form-onbeforeunload", 1)
        });
        $("body").on("keydown", function(j) {
            if (j.keyCode == 13 && j.ctrlKey && !j.shiftKey) {
                a.trigger("click")
            } else {
                if (j.keyCode == 13 && j.ctrlKey && j.shiftKey) {
                    e.trigger("click")
                }
            }
        });
        $("body").on("click", 'button[type="submit"]:not(.disabled)', function(j) {
            $("button").addClass("disabled").find(".fa.fa-arrow-circle-o-left").addClass("invisible").after(g);
            a.attr("data-form-onbeforeunload", 0)
        });
        $("body").on("click", 'button[data-form="submitter"]:not(.disabled)', function(l) {
            l.preventDefault();
            var k = $(this),
                m = (k.parents("form").attr("enctype") && k.parents("form").attr("enctype").indexOf("form-data") > -1 ? 0 : 1),
                j = (m ? k.parents("form").serialize() : (new FormData(k.parents("form")[0])));
            $("button").addClass("disabled").find(".fa.fa-floppy-o").addClass("invisible").after(h);
            setTimeout(function() {
                $.ajax({
                    type: "POST",
                    url: $__current_directory + c.attr("action"),
                    data: j,
                    dataType: "text",
                    cache: false,
                    contentType: false,
                    processData: false,
                    success: function(n) {
                        a.removeClass("btn-warning").addClass("btn-success").attr("data-form-onbeforeunload", 0);
                        $("button").removeClass("disabled").find(".fa").removeClass("invisible").parent().find(".cspinner_container").remove();
                        messenger('<i class="fa fa-fw fa-check-circle"></i>&nbsp;&nbsp;&nbsp;' + lang("theme_xhred_filemanager_file_saved").replace("%value", f), 3, "success")
                    },
                    error: function(n) {}
                })
            }, 300)
        })
    }
}

function container_fluid_size() {
    t__wi_p.f__c_view();
    if (!t__wi_p.$(".mobile-menu-toggler").hasClass("selected")) {
        t__wi_p.$("aside").addClass("hidden-xs");
        t__wi_p.$("aside").css("transform", "translate(" + settings_leftmenu_width + "px, 0px)");
        t__wi_p.$(".switch-toggle").css("display", "table");
        if (typeof jQuery().transition == "function" && (t__wi_p.$(".__logo") && !t__wi_p.$(".mobile-menu-toggler:visible").length)) {
            t__wi_p.$(".__logo").transition({
                y: "-140px"
            }, 700, function() {})
        } else {
            if (t__wi_p.$(".__logo")) {
                t__wi_p.$(".__logo").css("transform", "translate(0px, 0px)")
            }
        }
    }
    if (settings_side_slider_fixed !== true || t__wi_p.$(".mobile-menu-toggler:visible").length) {
        n___p__f(0)
    } else {
        n___p__f(1)
    }
}

function __cms() {
    t__wi_p.$(".navigation > li:not('.has-sub')").removeClass("sub_active").find("span.current-large").remove();
    t__wi_p.$(".navigation > li > ul.sub > li").removeClass("sub_active").find("span.current").remove();
    t__wi_p.$(".navigation > li.has-sub").removeClass("active");
    t__wi_p.$(".navigation > li > ul.sub").hide();
    t__wi_p.$(".navigation > li > a > i.fa.fa-folder-open-o").removeClass("fa-folder-open-o")
}

function __is_same_origin(b) {
    if ((b.attr("href") && (b.attr("href").match("^http:") || b.attr("href").match("^https:") || b.attr("href").match("^ftp:")) && b.attr("target") != "page" && $.url(b.attr("href")).attr("host") != $__host_url) || b.attr("data-href") && (b.attr("data-href").match("^http:") || b.attr("data-href").match("^https:") || b.attr("data-href").match("^ftp:")) && $.url(b.attr("data-href")).attr("host") != $__host_url) {
        return 0
    } else {
        return 1
    }
}

function settings_update() {
    $.each(t__wi_p.$('iframe[name="page"]').contents().find("#atsettings .ui_form").serializeArray(), function(d, e) {
        if (e.value == "true" || e.value == "false") {
            if (e.value == "true") {
                var f = true
            } else {
                if (e.value == "false") {
                    var f = false
                }
            }
        } else {
            var f = e.value
        }
        window[e.name] = f;
        t__wi_p[e.name] = f
    })
}

function loader_start_config() {
    $("body").on("click", 'a[href^="http"], a[href^="https"], a[href^="ftp"], a[href^="ftps"]', function(b) {
        if (!__is_same_origin($(this))) {
            $(this).attr("target", "_blank");
            t__wi_p.__lre()
        }
    });
    t__wi_p.$.each($('ul.navigation a[href^="http"], ul.navigation a[href^="https"], ul.navigation a[href^="ftp"], ul.navigation a[href^="ftps"], ul.navigation a[data-href^="http"], ul.navigation a[data-href^="https"], ul.navigation a[data-href^="ftp"], ul.navigation a[data-href^="ftps"]'), function() {
        $(this).removeClass("navigation_module_trigger").parents("li").addClass("navigation_external");
        $(this).attr("target", "_blank");
        $(this).attr("href", $(this).data("href"));
        $(this).removeAttr("data-href")
    })
}
loader_start_config();

function t__wm_l(b) {
    t_uri_upd();
    if (dashboard_switch() == false || $current_page_full == $_____link_full + "/webmin/edit_themes.cgi") {
        $.ajax({
            type: "GET",
            url: $_____link_full + "/index.cgi/?xhr-navigation=1&xhr-navigation-type=" + (b == "open_webmail" ? "webmail" : "webmin"),
            data: false,
            dataType: "text",
            success: function(a) {
                t__wi_p.$("body ul.navigation").html(a)
            }
        });
        t__m_b()
    }
}

function t__vm_l(b) {
    t_uri_upd();
    $.ajax({
        type: "GET",
        url: $_____link_full + "/index.cgi/?xhr-navigation=1&xhr-navigation-type=virtualmin" + (b ? ("&dom=" + b) : (settings_right_virtualmin_default ? ("&dom=" + settings_right_virtualmin_default) : false)),
        data: false,
        dataType: "text",
        success: function(a) {
            t__wi_p.$("body ul.navigation").html(a)
        }
    });
    t__m_b()
}

function t__cm_l(b) {
    t_uri_upd();
    $.ajax({
        type: "GET",
        url: $_____link_full + "/index.cgi/?xhr-navigation=1&xhr-navigation-type=cloudmin" + ((b || b === 0) ? ("&sid=" + b) : (settings_right_cloudmin_default ? ("&sid=" + settings_right_cloudmin_default) : false)),
        data: false,
        dataType: "text",
        success: function(a) {
            t__wi_p.$("body ul.navigation").html(a);
            ported_shell_menu_icon_ctl()
        }
    });
    t__m_b()
}

function t__m_b() {
    $.ajax({
        type: "GET",
        url: $_____link_full + "/index.cgi/?xhr-buttons=1&xhr-buttons-type=" + (($t_uri_virtualmin || $t_uri_cloudmin) ? 1 : 0) + "",
        data: false,
        dataType: "text",
        success: function(b) {
            t__wi_p.$("body ul.user-links").html(b);
            ported_shell_menu_icon_ctl()
        }
    })
}

function t__wm_r() {
    $("body").append('<span id="____switch"></span>');
    $.ajax({
        type: "GET",
        url: $_____link_full + "/index.cgi/?xhr-default=1",
        data: false,
        dataType: "text",
        success: function(b) {
            $("#____switch").html(b);
            $____switch = $("#____switch").text();
            t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + (($access_level == 3 && is_module("mailbox") && $t_uri_webmail) ? "/mailbox/index.cgi?id=INBOX" : (($____switch.substring(0, 1) == "/" ? "" : "/") + $____switch)));
            $("#____switch").remove()
        }
    })
}

function t_vm_r(c) {
    var d;
    if (c !== false) {
        d = "virtual-server/summary_domain.cgi?dom=" + c
    } else {
        if (settings_right_virtualmin_default == "sysinfo.cgi" || settings_right_virtualmin_default == "") {
            d = "sysinfo.cgi"
        } else {
            if (settings_right_virtualmin_default == "index.cgi") {
                d = "virtual-server/index.cgi"
            } else {
                d = "virtual-server/summary_domain.cgi?dom=" + settings_right_virtualmin_default
            }
        }
    }
    t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/" + d)
}

function t_cm_r(c) {
    var d;
    if (c !== false) {
        d = "server-manager/edit_serv.cgi?id=" + c
    } else {
        if (settings_right_cloudmin_default == "sysinfo.cgi" || settings_right_cloudmin_default == "") {
            d = "sysinfo.cgi"
        } else {
            if (settings_right_cloudmin_default == "index.cgi") {
                d = "server-manager/index.cgi"
            } else {
                d = "server-manager/edit_serv.cgi?id=" + settings_right_cloudmin_default
            }
        }
    }
    t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/" + d)
}

function t__m(d, f, e) {
    if (d === "open_virtualmin") {
        t__vm_l(false);
        if ((settings_right_reload == true || f === true) && e !== true) {
            t_vm_r(false)
        }
    } else {
        if (d === "open_cloudmin") {
            t__cm_l(false);
            if ((settings_right_reload == true || f === true) && e !== true) {
                t_cm_r(false)
            }
        } else {
            t__wm_l(d);
            if ((settings_right_reload == true || f === true) && e !== true) {
                t__wm_r()
            }
        }
    }
}

function ___dlm(c, d) {
    if (d) {
        __cms()
    }
    t__wi_p.$('a[href="' + c + '"]:first').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
}

function __samn() {
    return ':not(.menu-exclude-link, [data-href="/webmin/refresh_modules.cgi"])'
}

function __sam(e, i) {
    if (i === false) {
        var h = false,
            k = "href";
        if (t__wi_p.$('a[data-href="' + e + '"]' + __samn() + "").length) {
            h = "=";
            k = "data-href"
        } else {
            if (t__wi_p.$('a[data-href="' + e + '/"]' + __samn() + "").length) {
                h = "=";
                e = e + "/";
                k = "data-href"
            } else {
                if (t__wi_p.$('a[data-href="/' + e + '"]' + __samn() + "").length) {
                    h = "=";
                    e = "/" + e;
                    k = "data-href"
                } else {
                    if (t__wi_p.$('a[data-href^="' + e + '"]' + __samn() + "").length) {
                        h = "^=";
                        k = "data-href"
                    } else {
                        if (t__wi_p.$('a[data-href^="' + e + '/"]' + __samn() + "").length) {
                            h = "^=";
                            e = e + "/";
                            k = "data-href"
                        } else {
                            if (t__wi_p.$('a[data-href^="/' + e + '"]' + __samn() + "").length) {
                                h = "^=";
                                e = "/" + e;
                                k = "data-href"
                            } else {
                                if (t__wi_p.$('a[data-href$="' + e + '"]' + __samn() + "").length) {
                                    h = "$=";
                                    k = "data-href"
                                } else {
                                    if (t__wi_p.$('a[data-href$="' + e + '/"]' + __samn() + "").length) {
                                        h = "$=";
                                        e = e + "/";
                                        k = "data-href"
                                    } else {
                                        if (t__wi_p.$('a[data-href$="/' + e + '"]' + __samn() + "").length) {
                                            h = "$=";
                                            e = "/" + e;
                                            k = "data-href"
                                        } else {
                                            if (t__wi_p.$('a[data-href*="' + e + '"]' + __samn() + "").length) {
                                                h = "*=";
                                                k = "data-href"
                                            } else {
                                                if (k === "href") {
                                                    if (t__wi_p.$('a[href="' + e + '"]' + __samn() + "").length) {
                                                        h = "="
                                                    } else {
                                                        if (t__wi_p.$('a[href="' + e + '/"]' + __samn() + "").length) {
                                                            h = "=";
                                                            e = e + "/"
                                                        } else {
                                                            if (t__wi_p.$('a[href="/' + e + '"]' + __samn() + "").length) {
                                                                h = "=";
                                                                e = "/" + e
                                                            } else {
                                                                if (t__wi_p.$('a[href^="' + e + '"]' + __samn() + "").length) {
                                                                    h = "^="
                                                                } else {
                                                                    if (t__wi_p.$('a[href^="' + e + '/"]' + __samn() + "").length) {
                                                                        h = "^=";
                                                                        e = e + "/"
                                                                    } else {
                                                                        if (t__wi_p.$('a[href^="/' + e + '"]' + __samn() + "").length) {
                                                                            h = "^=";
                                                                            e = "/" + e
                                                                        } else {
                                                                            if (t__wi_p.$('a[href$="' + e + '"]' + __samn() + "").length) {
                                                                                h = "$="
                                                                            } else {
                                                                                if (t__wi_p.$('a[href$="' + e + '/"]' + __samn() + "").length) {
                                                                                    h = "$=";
                                                                                    e = e + "/"
                                                                                } else {
                                                                                    if (t__wi_p.$('a[href$="/' + e + '"]' + __samn() + "").length) {
                                                                                        h = "$=";
                                                                                        e = "/" + e
                                                                                    } else {
                                                                                        if (t__wi_p.$('a[href*="' + e + '"]' + __samn() + "").length) {
                                                                                            h = "*="
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (h) {
            if ((($current_page_full && $current_page_full.indexOf("/webmin/edit_themes.cgi") > -1) || ($source_path == $_____link + "settings-editor_read.cgi" || $source_path == $_____link + "settings-upload.cgi")) && t__wi_p.location.search != "?updating-webmin-theme" && (t__wi_p.$t_uri_virtualmin || t__wi_p.$t_uri_cloudmin)) {
                t__wi_p.__cms();
                return
            }
            __cms();
            t__wi_p.$("a[" + k + "" + h + '"' + e + '"]:first' + __samn() + "").parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
        }
    } else {
        if ($__source_file == "settings-editor_read.cgi" || $__source_file == "settings-upload.cgi") {
            __sam("webmin/", false);
            return
        }
        if ($__source_path === "/config.cgi") {
            __sam($__source_query + "/", false);
            return
        }
        if ($__source_path === "/phpini/list_ini.cgi") {
            __sam($__source_query.replace(".", "%2E"), false);
            return
        }
        custom_url = "auto";
        if (custom_url != "auto") {
            $current_page = custom_url
        } else {
            $current_page = $_url.attr("path").replace(/^\//g, "")
        }
        if ($("#headln2l a").attr("href")) {
            if ($("#headln2l a").attr("href").indexOf(".cgi") >= 0) {
                $current_page_webmin = 1
            } else {
                $current_page_webmin = 0
            }
        } else {
            $current_page_webmin = 0
        }(($current_page.split("/")[0] == "virtual-server" || $current_page.split("/")[0] == "server-manager") && !$current_page_webmin && (t__wi_p.$("#wrapper").data("virtual-server") != -1 || t__wi_p.$("#wrapper").data("server-manager") != -1)) ? $current_page = $current_page.split("/")[0] + "/" + $current_page.split("/")[1]: $current_page = $current_page.split("/")[0] + "/";
        $current_page_search = t__wi_p.$('iframe[name="page"]').get(0) ? t__wi_p.$('iframe[name="page"]').get(0).contentWindow.location.search : 0;
        var j = [];
        t__wi_p.$('li > ul.sub li:not(.menu-exclude):not(.user-link) a:not(.menu-exclude-link, [data-href="/webmin/refresh_modules.cgi"])').each(function() {
            if ($(this).attr("href").substring(0, 1) == "/") {
                j.push($(this).attr("href").substring(1))
            } else {
                j.push($(this).attr("href"))
            }
        });
        if ((product_name() !== "Virtualmin" && $__source_file.indexOf("save_log.cgi") === -1) && (product_name() !== "Virtualmin" && $__source_file.indexOf("edit_log.cgi") === -1) && ($current_page_full && $current_page_full.indexOf("/servers/link.cgi/") === -1) && (j.indexOf($current_page) > -1 || j.indexOf(($current_page + "index.cgi")) > -1 || j.indexOf($current_page + $current_page_search) > -1 || j.indexOf(($current_page_full)) > -1 || j.indexOf(($current_page_full.substring(1))) > -1)) {
            if (product_name() !== "Virtualmin" && product_name() !== "Cloudmin") {
                __cms()
            }
            if (t__wi_p.$('a[href="' + $current_page + 'index.cgi"]').length) {
                $current_page = $current_page + "index.cgi"
            } else {
                if (t__wi_p.$('a[href="/' + $current_page + 'index.cgi"]').length) {
                    $current_page = "/" + $current_page + "index.cgi"
                } else {
                    if (t__wi_p.$('a[href="/' + $current_page + '"]').length) {
                        $current_page = "/" + $current_page
                    } else {
                        if (t__wi_p.$('a[href="/' + $current_page + $current_page_search + '"]').length) {
                            $current_page = "/" + $current_page + $current_page_search
                        } else {
                            if (t__wi_p.$('a[href="' + $current_page + $current_page_search + '"]').length) {
                                $current_page = $current_page + $current_page_search
                            }
                        }
                    }
                }
            }
            if (t__wi_p.$('a[href="' + $current_page + '"]').length) {
                t__wi_p.$('a[href="' + $current_page + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
            } else {
                if (t__wi_p.$('a[href="' + $current_page_full + '"]').length) {
                    t__wi_p.$('a[href="' + $current_page_full + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
                } else {
                    if (t__wi_p.$('a[href="' + $current_page_full.substring(1) + '"]').length) {
                        t__wi_p.$('a[href="' + $current_page_full.substring(1) + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
                    }
                }
            }
        } else {
            if ($t_uri_virtualmin || $t_uri_cloudmin) {
                $current_page_with_path = $_url.attr("path").substring(1);
                if ($current_page_with_path == "virtual-server/webminlog") {
                    $current_page_with_path = "webminlog/search.cgi?"
                } else {
                    if ($current_page_with_path == "virtual-server/syslog") {
                        $current_page_with_path = "syslog/save_log.cgi?"
                    } else {
                        if ($current_page_with_path == "virtual-server/apache") {
                            $current_page_with_path = "apache/virt_index.cgi?"
                        } else {
                            if ($current_page_with_path == "virtual-server/webalizer") {
                                $current_page_with_path = "webalizer/edit_log.cgi?"
                            } else {
                                if ($current_page_with_path == "webminlog/search.cgi") {
                                    $current_page_with_path = "webminlog/search.cgi?"
                                }
                            }
                        }
                    }
                }
                if ($current_page_with_path == "apache/virt_index.cgi?" || $current_page_with_path == "apache/virt_index.cgi") {
                    __cms();
                    t__wi_p.$('a[href^="/' + $current_page_with_path + "?" + $_url.attr("query") + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
                } else {
                    if ($current_page_with_path == "syslog/save_log.cgi") {
                        if ($_url.attr("query").indexOf("access_log") > -1) {
                            __cms();
                            t__wi_p.$('a[href$="access%5Flog"]:first' + __samn() + "").parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
                        } else {
                            if ($_url.attr("query").indexOf("error_log") > -1) {
                                __cms();
                                t__wi_p.$('a[href$="error%5Flog"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
                            }
                        }
                    } else {
                        if ($current_page_with_path == "webalizer/edit_log.cgi" || $current_page_with_path == "webalizer/index.cgi") {
                            __cms();
                            t__wi_p.$('a[href*="webalizer/"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
                        } else {
                            if ($current_page_with_path == "config.cgi" || $current_page_with_path == "/config.cgi") {
                                __cms();
                                t__wi_p.$('a[href*="config.cgi"]:first' + __samn() + "").parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
                            } else {
                                if ($current_page_with_path == "webminlog/search.cgi?") {
                                    __cms();
                                    t__wi_p.$('a[href^="/webminlog/search.cgi"]:first' + __samn() + "").parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
                                } else {
                                    if (typeof $current_page_with_path != "undefined" && t__wi_p.$('a[href*="' + $current_page_with_path + '"]:first' + __samn() + "").length > 0) {
                                        __cms();
                                        t__wi_p.$('a[href*="' + $current_page_with_path + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        var l = [];
        t__wi_p.$("a.navigation_module_trigger").each(function() {
            if ($(this).hasClass("navigation_trigger_single_link")) {
                l.push($(this).data("href"))
            } else {
                if ($(this).data("href") != "/virtual-server/index.cgi") {
                    l.push($(this).data("href"))
                } else {
                    if ($(this).data("href") == "/virtual-server/index.cgi") {
                        l.push("/virtual-server");
                        l.push("/virtual-server/index.cgi")
                    }
                }
            }
        });
        var j = [];
        t__wi_p.$('li > ul.sub li:not(.menu-exclude):not(.user-link) a:not(.menu-exclude-link, [data-href="/webmin/refresh_modules.cgi"])').each(function() {
            if ($(this).attr("href").substring(0, 1) == "/") {
                j.push($(this).attr("href").substring(1))
            } else {
                j.push($(this).attr("href"))
            }
        });
        $___current_page_search = $current_page.replace(/\/$/, "") + $current_page_search;
        $_current_page_search = "/" + $current_page.replace(/\/$/, "") + $current_page_search;
        if ($current_page_full == $_____link_full + "/virtual-server/history.cgi") {
            __cms();
            t__wi_p.$('a[data-href="/virtual-server/history.cgi"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>')
        } else {
            if ($current_page_full == $_____link_full + "/server-manager/index.cgi") {
                __cms();
                t__wi_p.$('a[data-href="/server-manager/index.cgi"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>')
            } else {
                if ($current_page_full == $_____link_full + "/webmin_search.cgi") {
                    __cms()
                } else {
                    if ((l.indexOf($_current_page_search) > -1)) {
                        __cms();
                        t__wi_p.$('a[data-href="' + $_current_page_search + ($_current_page_search == "/virtual-server" ? "/index.cgi" : "") + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>')
                    } else {
                        if (j.indexOf($_current_page_search) > -1 || j.indexOf($___current_page_search) > -1) {
                            __cms();
                            t__wi_p.$('a[href*="' + $___current_page_search + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
                        } else {
                            if (t__wi_p.$("#wrapper").data("product") == "usermin" && $t_uri_webmail && $current_page_full && ($current_page_full.indexOf("/mailbox") || $current_page_full.indexOf("/filter"))) {
                                $_current_page_search_no_extra = $_current_page_search.replace("&user=", "").replace(/\./g, "%2E").replace("mailbox?id=", "mailbox/index.cgi?id=");
                                $.each(l, function(b, a) {
                                    if ($_current_page_search_no_extra && $_current_page_search_no_extra.indexOf(a) > -1) {
                                        if (t__wi_p.$('a[data-href="' + a + '"]').length > 0) {
                                            __cms();
                                            t__wi_p.$('a[data-href="' + a + '"]').find(".fa.fa-folder-o").addClass("fa-folder-open-o");
                                            t__wi_p.$('a[data-href="' + a + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>')
                                        }
                                    }
                                });
                                $_current_page_search = "/" + $current_page + "index.cgi" + $current_page_search;
                                $__relative_url == "/mailbox/edit_sig.cgi?" ? $__relative_url = "/mailbox/edit_sig.cgi" : false;
                                if (t__wi_p.$('a[data-href="' + $__relative_url + '"]').length > 0) {
                                    __cms();
                                    t__wi_p.$('a[data-href="' + $__relative_url + '"]').find(".fa.fa-folder-o").addClass("fa-folder-open-o");
                                    t__wi_p.$('a[data-href="' + $__relative_url + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>')
                                }
                                if ($current_page_full == $_____link_full + "/mailbox/") {
                                    if (t__wi_p.$('a[data-href="' + $_current_page_search + '"]').length > 0) {
                                        __cms();
                                        t__wi_p.$('a[data-href="' + $_current_page_search + '"]').find(".fa.fa-folder-o").addClass("fa-folder-open-o");
                                        t__wi_p.$('a[data-href="' + $_current_page_search + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>')
                                    } else {
                                        if (t__wi_p.$('a[data-href="/mailbox/index.cgi?id=INBOX"]').length > 0 && l.indexOf("/" + $current_page) === -1) {
                                            __cms();
                                            t__wi_p.$('a[data-href="/mailbox/index.cgi?id=INBOX"]').parent("li:first-child").find(".fa.fa-folder-o").addClass("fa-folder-open-o");
                                            t__wi_p.$('a[data-href="/mailbox/index.cgi?id=INBOX"]').parent("li:first-child").addClass("sub_active").append('<span class="current-large"></span>')
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function __dpt() {
    if (!$g__v__nav) {
        return
    }
    if (t__wi_p.$('li.sub_active a[href*="' + $g__o__f_m + '"]').length) {
        var a = t__wi_p.$('iframe[name="page"]').get(0).contentWindow.$g__o__f_m;
        if (t__wi_p.$('iframe[name="page"]').get(0) && t__wi_p.$('iframe[name="page"]').get(0).contentWindow && t__wi_p.$('iframe[name="page"]').get(0).contentWindow.$('body[class*="' + a + '"] .active form input#path').val()) {
            t__wi_p.document.title = t__wi_p.$('iframe[name="page"]').get(0).contentWindow.$('body[class*="' + a + '"] .active form input#path').val() + " - " + t__wi_p.$("li.sub_active a").text() + " — " + $g__v__title
        } else {
            t__wi_p.document.title = t__wi_p.$("li.sub_active a").text() + " — " + $g__v__title
        }
    } else {
        if ((product_name() == "Virtualmin" || product_name() == "Cloudmin") && t__wi_p.$("select option:checked").text() && t__wi_p.$("select option:checked").text().length) {
            if (t__wi_p.$("li.sub_active a").text() && t__wi_p.$("li.sub_active a").text().length) {
                var b = $("#webmin_search_form").parent("li").prevAll();
                if (b.has(".sub_active, .current-large").length) {
                    t__wi_p.document.title = t__wi_p.$("select option:checked").text() + " - " + t__wi_p.$("li.sub_active a").text() + " — " + $g__v__title
                } else {
                    t__wi_p.document.title = t__wi_p.$("li.sub_active a").text() + " — " + $g__v__title
                }
            } else {
                t__wi_p.document.title = product_name() + " — " + $g__v__title
            }
        } else {
            if (product_name() == "Mail") {
                if (t__wi_p.$("li.sub_active a").text() && t__wi_p.$("li.sub_active a").text().length) {
                    t__wi_p.document.title = t__wi_p.$("li.sub_active a").text() + " - Mail  — " + $g__v__title
                } else {
                    t__wi_p.document.title = product_name() + " — " + $g__v__title
                }
            } else {
                if (t__wi_p.$("li.sub_active a").text() && t__wi_p.$("li.sub_active a").text().length) {
                    t__wi_p.document.title = t__wi_p.$("li.sub_active a").text() + " — " + $g__v__title
                } else {
                    t__wi_p.document.title = $g__v__title
                }
            }
        }
    }
    var c = t__wi_p.$(".right-side-tabs .list-group-item:not(.no-notifications, .opacity-0_3)").length;
    if (settings_side_slider_enabled) {
        t__wi_p.titlenotifier.set(c)
    } else {
        t__wi_p.titlenotifier.set(0)
    }
}

function __dlm(b) {
    if (t__wi_p.$___________m_locked === 1) {
        return
    }
    if ($current_page_full == $_____link_full + "/server-manager/" || $current_page_full == $_____link_full + "/virtual-server/") {
        b = "index.cgi"
    }
    typeof b === "undefined" ? b = false : false;
    if (!b && $current_page_full == $_____link_full + "/virtual-server/summary_domain.cgi") {
        __sam("/virtual-server/index.cgi", false)
    }
    if (b) {
        __sam(b, false)
    } else {
        if (product_name() !== "Webmin" && product_name() !== "Usermin" && (t__wi_p.$('a[href*="' + $___relative_url + '"]:first' + __samn() + "").length || t__wi_p.$('a[data-href*="' + $___relative_url + '"]:first' + __samn() + "").length)) {
            __sam($___relative_url, false)
        } else {
            if ((product_name() !== "Virtualmin" && product_name() !== "Cloudmin") && product_name() !== "Webmin" && product_name() !== "Usermin" && (t__wi_p.$('a[href*="' + $___source_path + '"]:first' + __samn() + "").length || t__wi_p.$('a[data-href*="' + $___source_path + '"]:first' + __samn() + "").length)) {
                __sam($___source_path, false)
            } else {
                if ((product_name() !== "Virtualmin" && product_name() !== "Cloudmin") && (t__wi_p.$('a[href*="' + $___source_dir + '"]:first' + __samn() + "").length || t__wi_p.$('a[data-href*="' + $___source_dir + '"]:first' + __samn() + "").length) || ((access_level() == 2 || access_level() == 4) && t___wi.location.search == "?virtualmin")) {
                    __sam($___source_dir, false)
                } else {
                    if ($__source_file) {
                        __sam($__source_file, true)
                    }
                }
            }
        }
    }
    if (t__wi_p.$('a[data-href="/sysinfo.cgi"]').hasClass("hidden") && $current_page_full == $_____link_full + "/sysinfo.cgi") {
        __cms()
    }
    __dpt()
}

function t__m__m(f, l) {
    var p = $.url($__source_url).param("dom"),
        i = $.url($__source_url).param("id"),
        h = "aside select";
    if ($.url($__source_url).param("refresh") == "1") {
        if (!$("body").contents().text().match(/___theme_post_save___/)) {
            var j = false;
            if (i || p && ($t_uri_virtualmin || $t_uri_cloudmin)) {
                if ($t_uri_virtualmin) {
                    j = p
                } else {
                    if ($t_uri_cloudmin) {
                        j = i
                    }
                }
            } else {
                if ($t_uri_virtualmin || $t_uri_cloudmin) {
                    j = t__wi_p.$(h).val()
                }
            }
            if ($t_uri_virtualmin) {
                t__wi_p.t__vm_l(j)
            } else {
                if ($t_uri_cloudmin) {
                    t__wi_p.t__cm_l(j)
                } else {
                    var g = $(".switch-toggle input.dynamic:checked").attr("id");
                    t__wi_p.t__wm_l((g ? g : "open_webmin"))
                }
            }
            return
        }
    } else {
        var e = " option",
            n = t__wi_p.$(h).val(),
            q = t__wi_p.$(h + e + "[value=" + n + "]").text();
        if (t__wi_p.t___p__ll === 0 && (($t_uri_virtualmin || $t_uri_cloudmin) && (i || p))) {
            if (!$("body").contents().text().match(/___theme_post_save___/)) {
                if ($t_uri_virtualmin && !$t_uri_cloudmin && p && n && (p != n && p != q)) {
                    var o = t__wi_p.$(h + e).map(function() {
                        return $(this).val()
                    }).get();
                    if ($.inArray(p, o) != -1) {
                        t__wi_p.t__vm_l(p)
                    } else {
                        var k = t__wi_p.$(h + e).filter(function() {
                            return $(this).text() == p
                        }).val();
                        t__wi_p.t__vm_l(k)
                    }
                } else {
                    var o = t__wi_p.$(h + e).map(function() {
                        return $(this).val()
                    }).get();
                    if ($t_uri_cloudmin && i && n && (i != n && i != q)) {
                        if ($.inArray(i, o) != -1) {
                            t__wi_p.t__cm_l(i)
                        } else {
                            var m = t__wi_p.$(h + e).filter(function() {
                                return $(this).text() == i
                            }).val();
                            t__wi_p.t__cm_l(m)
                        }
                    }
                }
                return
            }
        }
    }
    if (t___wi.location != t__wi_p.location) {
        if ($__current_directory == $_____link_full + "/virtual-server/" || $current_page_full == $_____link_full + "/virtual-server/index.cgi" || $__relative_url == "/config.cgi?virtual-server") {
            if (t__wi_p.$(".switch-toggle input:checked").attr("id") != "open_virtualmin" && t__wi_p.$('.switch-toggle input[id="open_virtualmin"]').length) {
                t__wi_p.t__s("open_virtualmin");
                t__wi_p.t__m("open_virtualmin", f, l)
            }
        } else {
            if ($__current_directory == $_____link_full + "/server-manager/" || $current_page_full == $_____link_full + "/server-manager/index.cgi" || $__relative_url == "/config.cgi?server-manager") {
                if (t__wi_p.$(".switch-toggle input:checked").attr("id") != "open_cloudmin" && t__wi_p.$('.switch-toggle input[id="open_cloudmin"]').length) {
                    t__wi_p.t__s("open_cloudmin");
                    t__wi_p.t__m("open_cloudmin", f, l)
                }
            }
        }
    }
}

function v__cm___init() {
    if ($("textarea").length === 1 && ($("textarea").attr("name") === "data" || $("textarea").attr("name") === "text" || $("textarea").attr("name") === "conf" || is__mfq("virtual-server", "edit_html.cgi", "textok=") || $__source_file.indexOf("manual") > -1)) {
        if (is__mf("virtual-server", "mass_ucreate_form.cgi") || is__mf("virtual-server", "mass_create_form.cgi") || is__mf("server-manager", "edit_pubkey.cgi") || is__mf("server-manager", "edit_key.cgi") || $__relative_url == "/config.cgi?server-manager" || is__mf("useradmin", "batch_form.cgi") || is__mf("useradmin", "gbatch_form.cgi") || $__source_file == "mass_form.cgi" || $("textarea").attr("id") === "notes") {
            return 0
        }
        t__wi_p.$____loader_block__ = 1;
        return 1
    }
    return 0
}

function t__cm___init(g, i, f, j, d, m, k) {
    k = (typeof k == "undefined" || k == false ? false : true);

    function l(n, p, s, r, q, o) {
        q = (typeof q == "undefined" || q == false ? false : true);
        o = (typeof o == "undefined" || o == false ? false : true);
        $.each(n, function(u, w) {
            var b = $(this),
                c = ["phpini", "bind8"],
                B = ["phpini"],
                t = ["bind8"];
            $("#headln2l a").attr("href") ? $page = $("#headln2l a").attr("href").split("/")[1] : $page = null;
            c.indexOf($page) >= 0 && $(this).data("name", "data");
            CodeMirror.modeURL = "/unauthenticated/js/codemirror/mode/%N/%N.js";
            var a = null,
                x = "text/plain";
            var v = false;
            if ($current_page_full == $_____link_full + "/custom/view.cgi") {
                v = $('form[action="save.cgi"]').find(".table-title").find("tt").text()
            } else {
                if ($('body[class^="' + $g__o__f_m + '"]').length) {
                    v = $.url($__relative_url).param("file")
                } else {
                    v = $('select[name="file"]').val()
                }
            }
            var z = (p ? p : v),
                y, a, x;
            if (y = /.+\.([^.]+)$/.exec(z)) {
                var A = CodeMirror.findModeByExtension(y[1]);
                if (A) {
                    a = A.mode;
                    x = A.mime
                }
            } else {
                if (/\//.test(z)) {
                    var A = CodeMirror.findModeByMIME(z);
                    if (A) {
                        a = A.mode;
                        x = z
                    }
                } else {
                    a = null;
                    x = "text/plain"
                }
            }
            if ($page == "apache" || $page == "postfix" || $page == "dovecot" || $page == "spam" || $page == "virtualmin-nginx" || $page == "sendmail" || $page == "samba" || $page == "proftpd" || $page == "fail2ban" || $page == "sshd" || $page == "squid" || $page == "ldap-server") {
                a = "rpm";
                x = "rpm-spec"
            } else {
                if ($page == "phpini") {
                    a = "z80";
                    x = "text/x-z80"
                } else {
                    if ($page == "bind8" || $page == "procmail" || is__mf("virtual-server", "manual_records.cgi")) {
                        a = "clike";
                        x = "text/x-java"
                    } else {
                        if ($page == "virtual-server" && $(this).attr("name") == "body") {
                            a = "htmlmixed";
                            x = "text/html"
                        }
                    }
                }
            }
            $current_file = $current_page_full.replace(/^\//g, "");
            if ($current_file) {
                $current_file = $current_file.split("/")[1]
            }
            if (v__cm___init() || $(".jsPanel").length || q) {
                CodeMirror.commands.autocomplete = function(C) {
                    C.showHint({
                        hint: CodeMirror.hint.anyword
                    })
                };
                window["__cm_editor_" + r] = CodeMirror.fromTextArea(w, {
                    tabMode: "indent",
                    matchBrackets: true,
                    lineNumbers: true,
                    keyMap: "sublime",
                    highlightSelectionMatches: {
                        showToken: /\w/,
                        annotateScrollbar: true
                    },
                    lineWrapping: true,
                    indentUnit: 0,
                    autofocus: true,
                    foldGutter: true,
                    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
                    extraKeys: {
                        "Ctrl-Space": "autocomplete"
                    },
                    styleActiveLine: true,
                    theme: settings_cm_editor_palette
                });
                window["__cm_editor_" + r].setOption("mode", x);
                if (a != "rpm") {
                    CodeMirror.autoLoadMode(window["__cm_editor_" + r], a)
                }
                setTimeout(function() {
                    if (!$("body").find(".jsPanel").length) {
                        $(".CodeMirror").before('<i class="fa fa-fw fa-lg fa-question-circle text-muted -helper __helper"></i>')
                    }
                    var C = $(".fa.fa-question-circle.__helper");
                    C.popover({
                        container: "body",
                        placement: "auto right",
                        title: lang("theme_xhred_editor_help_title"),
                        content: lang("theme_xhred_editor_help_content"),
                        trigger: "click",
                        html: true
                    });
                    C.on("inserted.bs.popover", function() {
                        $("body").find(".theme_xhred_editor_help").parents(".popover").addClass("_helper")
                    });
                    $("body").on("click", function(D) {
                        $(".-helper.__helper").each(function() {
                            if (!$(this).is(D.target) && $(this).has(D.target).length === 0 && $(".popover").has(D.target).length === 0) {
                                $(this).popover("hide")
                            }
                        })
                    })
                }, 100);
                if (o) {
                    window["__cm_editor_" + r].on("change", function(D, C) {
                        $("body").attr("data-unload-warning", "1")
                    })
                }
                if ($current_file != "edit_cron.cgi" && $current_page_full != $_____link_full + "/virtualmin-password-recovery/" && $current_page_full != $_____link_full + "/bind8/forward_form.cgi") {
                    s ? ($resize = s) : ($resize = 2.8);
                    if (!s) {
                        $window_height = ($(window).outerHeight() - ($(window).outerHeight() / $resize));
                        window["__cm_editor_" + r].setSize(null, $window_height);
                        $(t___wi).resize(function() {
                            $window_height = ($(window).outerHeight() - ($(window).outerHeight() / $resize));
                            window["__cm_editor_" + r].setSize(null, $window_height)
                        })
                    } else {
                        window["__cm_editor_" + r].on("change", function(D, C) {
                            n.val(window["__cm_editor_" + r].getValue());
                            if ($(":focus").parents(".jsPanel").is(".jsPanel")) {
                                $(":focus").parents(".jsPanel").find("._filemanager_file_editor_save").addClass("text-danger")
                            }
                        });
                        window["__cm_editor_" + r].setSize($resize[0], $resize[1])
                    }
                }
                if ($(".sub_table_container").find(".CodeMirror").length) {
                    $(".sub_table_container").addClass("xcontent-force-no-styling");
                    $(".panel-body").addClass("xqcontent-forced")
                }
                __p__pe_sm()
            }
        })
    }

    function e() {
        var a = 0;
        if (t__wi_p.$load____ext === "src") {
            a = $('html head link[href*="css/jquery.jspanel."]:first')
        } else {
            a = $('html head link[href*="css/bundle."]:first')
        }
        if (!$('html head link[href*="css/codemirror."]').length) {
            a.before('<link href="' + $_____link_full + "/unauthenticated/css/codemirror." + t__wi_p.$load____ext + ".css?" + $g__t__ver_str + '" rel="stylesheet" type="text/css">')
        }
    }

    function h() {
        l(g, i, f, j, d, m);
        t__wi_p.$____loader_block__ = 0;
        __lre()
    }
    if (typeof CodeMirror === "function") {
        h()
    } else {
        if (!t__wi_p.$____cm__has_init__) {
            t__wi_p.$____cm__has_init__ = 1;
            e();
            $.getScript("" + $_____link_full + "/unauthenticated/js/codemirror." + t__wi_p.$load____ext + ".js", function(a, c, b) {
                !k && h();
                t__wi_p.$___ajax_requested_url = "_blank"
            })
        }
    }
}

function v__cm_viewer() {
    if ($('body[class^="syslog"]').length && $__source_query && $__source_query.indexOf("view=1") > -1) {
        return 1
    } else {
        return 0
    }
}

function f__cm_viewer() {
    t__wi_p.$____loader_block__ = 1;

    function a() {
        if (!$("pre").find("i").length) {
            var d = false;
            $("pre").each(function() {
                var f = $(this),
                    e = HTMLDecode(f.html());
                f.empty();
                d = CodeMirror(this, {
                    value: e,
                    lineNumbers: true,
                    mode: null,
                    theme: settings_cm_view_palette,
                    readOnly: true,
                    viewportMargin: Infinity
                })
            }).promise().done(function() {})
        }
    }

    function c() {
        var d = 0;
        if (t__wi_p.$load____ext === "src") {
            d = $('html head link[href*="css/jquery.jspanel."]:first')
        } else {
            d = $('html head link[href*="css/bundle."]:first')
        }
        if (!$('html head link[href*="css/codemirror."]').length) {
            d.before('<link href="' + $_____link_full + "/unauthenticated/css/codemirror." + t__wi_p.$load____ext + ".css?" + $g__t__ver_str + '" rel="stylesheet" type="text/css">')
        }
    }

    function b() {
        a();
        t__wi_p.$____loader_block__ = 0;
        __lre()
    }
    if (typeof CodeMirror === "function") {
        b()
    } else {
        if (!t__wi_p.$____cm__has_init__) {
            t__wi_p.$____cm__has_init__ = 1;
            c();
            $.getScript("" + $_____link_full + "/unauthenticated/js/codemirror." + t__wi_p.$load____ext + ".js", function(d, f, e) {
                b();
                t__wi_p.$___ajax_requested_url = "_blank"
            })
        }
    }
}(function(b) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);
(___is_iOSSafari && ($("html").css("overflow", "auto")));
if (___is_iOS) {
    $("head").append('  <style media="all" id="ipad-css" type="text/css">      .modal-backdrop.in {      	display: none !important;      }      </style>  ')
}
$(document).on("click", function(b) {
    if ($(b.target).attr("class") && $(b.target).attr("class").indexOf("select2") === 0) {} else {
        if (t__wi_p.$("aside select") && t__wi_p.$("aside select").length > 0 && t__wi_p.$("aside select").hasClass("select2-hidden-accessible")) {
            t__wi_p.$("aside select").select2("close")
        }
    }
});
$("a").each(function() {
    if ($(this).find("img").length) {
        $(this).css("text-decoration", "none")
    }
});
$("body").on("keydown", function(f) {
    var e = f.keyCode ? f.keyCode : f.which,
        d = String.fromCharCode(e).toLowerCase();
    if (t__wi_p.$('aside input[name="search"]').is(":focus")) {
        return
    }
    if (t__wi_p.$(".-shell-port-").hasClass("opened")) {
        return
    }
    if ($current_page_full == $_____link_full + "/server-manager/gvnc.cgi" || $current_page_full == $_____link_full + "/server-manager/login.cgi" || $current_page_full == $_____link_full + "/telnet/" || $current_page_full == $_____link_full + "/telnet/index.cgi" || $current_page_full == $_____link_full + "/stunnel/" || $current_page_full == $_____link_full + "/stunnel/index.cgi") {
        return
    }
    if (!$("input").is(":focus") && !$("select").is(":focus") && !$("textarea").is(":focus") && !$(".modal.in").length) {
        if (d && /[a-zA-Z0-9]/.test(d) && !f.ctrlKey && !f.altKey && !f.metaKey && e !== 106 && e !== 107 && e !== 109 && e !== 112 && e !== 113 && e !== 114 && e !== 115 && e !== 116 && e !== 117 && e !== 118 && e !== 119 && e !== 120 && e !== 121 && e !== 122 && e !== 123) {
            if (!$(".dataTables_filter label input").length) {
                setTimeout(function() {
                    if (f.shiftKey && d == "1") {
                        t__wi_p.$('aside input[name="search"]').focus().val("!")
                    } else {
                        t__wi_p.$('aside input[name="search"]').focus().val(d)
                    }
                }, 1)
            } else {
                $(".btn-filter-top-right").trigger("click");
                $(".btn-filter-top-right .dataTable-mirror").focus().trigger("keyup")
            }
        }
    }
});
$.ajaxSetup({
    beforeSend: function(b, a) {
        t__wi_p.$___ajax_requested_url = a.url
    },
    complete: function(b, a) {
        if (b.getResponseHeader("Auth-type") === "auth-required=1") {
            t___wi.top.location.reload()
        }
        if (t__wi_p.$___ajax_requested_url && (t__wi_p.$___ajax_requested_url.indexOf("help.cgi") > -1 || t__wi_p.$___ajax_requested_url.indexOf("edit_file.cgi") > -1)) {
            setTimeout(function() {
                t__wi_p.$___ajax_requested_url = "_blank"
            }, 100)
        }
    }
});