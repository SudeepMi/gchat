"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Vendors_Pages_Software_AddSoftware_js"],{

/***/ "./resources/js/Vendors/Pages/Software/AddSoftware.js":
/*!************************************************************!*\
  !*** ./resources/js/Vendors/Pages/Software/AddSoftware.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../axios */ "./resources/js/axios.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./resources/js/utils.js");
/* harmony import */ var _Helpers_HelperFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Helpers/HelperFunction */ "./resources/js/Vendors/Helpers/HelperFunction.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function AddSoftware() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      Categories = _useState2[0],
      setCategories = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      SoftwareName = _useState4[0],
      setSoftwareName = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState6 = _slicedToArray(_useState5, 2),
      Tagline = _useState6[0],
      setTagline = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState8 = _slicedToArray(_useState7, 2),
      ProductURL = _useState8[0],
      setProductURL = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState10 = _slicedToArray(_useState9, 2),
      CategoryID = _useState10[0],
      setCategoryID = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState12 = _slicedToArray(_useState11, 2),
      SoftwareCompt = _useState12[0],
      setSoftwareCompt = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState14 = _slicedToArray(_useState13, 2),
      Summary = _useState14[0],
      setSummary = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState16 = _slicedToArray(_useState15, 2),
      Description = _useState16[0],
      setDescription = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState18 = _slicedToArray(_useState17, 2),
      Logo = _useState18[0],
      setLogo = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState20 = _slicedToArray(_useState19, 2),
      SoftwareId = _useState20[0],
      setSoftwareId = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      _useState22 = _slicedToArray(_useState21, 2),
      FormSlider = _useState22[0],
      setFormSlider = _useState22[1];

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState24 = _slicedToArray(_useState23, 2),
      OfferTrial = _useState24[0],
      setOfferTrial = _useState24[1];

  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState26 = _slicedToArray(_useState25, 2),
      isLifeTimeFree = _useState26[0],
      setisLifeTimeFree = _useState26[1];

  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState28 = _slicedToArray(_useState27, 2),
      isCustomizable = _useState28[0],
      setisCustomizable = _useState28[1];

  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState30 = _slicedToArray(_useState29, 2),
      DesktopPlatform = _useState30[0],
      setDesktopPlatform = _useState30[1];

  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState32 = _slicedToArray(_useState31, 2),
      AviablePlatform = _useState32[0],
      setAviablePlatform = _useState32[1];

  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState34 = _slicedToArray(_useState33, 2),
      Romb = _useState34[0],
      setRomb = _useState34[1];

  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState36 = _slicedToArray(_useState35, 2),
      PaymentOption = _useState36[0],
      setPaymentOption = _useState36[1];

  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState38 = _slicedToArray(_useState37, 2),
      IsAPIavailable = _useState38[0],
      setIsAPIavailable = _useState38[1];

  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState40 = _slicedToArray(_useState39, 2),
      TargetAudience = _useState40[0],
      setTargetAudience = _useState40[1];

  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState42 = _slicedToArray(_useState41, 2),
      MPO = _useState42[0],
      setMPO = _useState42[1];

  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState44 = _slicedToArray(_useState43, 2),
      LA = _useState44[0],
      setLA = _useState44[1];

  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState46 = _slicedToArray(_useState45, 2),
      integration = _useState46[0],
      setintegration = _useState46[1];

  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState48 = _slicedToArray(_useState47, 2),
      AvailableSupport = _useState48[0],
      setAvailableSupport = _useState48[1];

  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState50 = _slicedToArray(_useState49, 2),
      SS = _useState50[0],
      setSS = _useState50[1];

  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState52 = _slicedToArray(_useState51, 2),
      VideoLink = _useState52[0],
      setVideoLink = _useState52[1];

  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState54 = _slicedToArray(_useState53, 2),
      BrochureLink = _useState54[0],
      setBrochureLink = _useState54[1];

  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState56 = _slicedToArray(_useState55, 2),
      Ebooks = _useState56[0],
      setEbooks = _useState56[1];

  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState58 = _slicedToArray(_useState57, 2),
      Whitepapers = _useState58[0],
      setWhitepapers = _useState58[1];

  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState60 = _slicedToArray(_useState59, 2),
      PDF = _useState60[0],
      setPDF = _useState60[1];

  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState62 = _slicedToArray(_useState61, 2),
      Guide = _useState62[0],
      setGuide = _useState62[1];

  var history = (0,react_router__WEBPACK_IMPORTED_MODULE_6__.useHistory)(); // const []

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/software-categories").then(function (res) {
      setCategories(res.data);
    }); // setFormSlider()
  }, []);

  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState64 = _slicedToArray(_useState63, 2),
      CompanyDetails = _useState64[0],
      setCompanyDetails = _useState64[1];

  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState66 = _slicedToArray(_useState65, 2),
      loading = _useState66[0],
      setloading = _useState66[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (0,_Helpers_HelperFunction__WEBPACK_IMPORTED_MODULE_4__.getCompanydetails)().then(function (response) {
      console.log(response);
      setCompanyDetails(response);

      if (response) {
        setloading(false);
      }
    });
  }, []);

  if (!CompanyDetails) {
    history.push('/vendor/add-company');
  }

  var fileData = new FormData();
  fileData.append('file', Logo);

  var HandleFirstSubmit = function HandleFirstSubmit(e) {
    e.preventDefault();
    var vendorid = (0,_Helpers_HelperFunction__WEBPACK_IMPORTED_MODULE_4__.get_current_auth_id)();
    var data = {
      vendor_id: vendorid,
      software_name: SoftwareName,
      tagline: Tagline,
      category_id: CategoryID,
      software_competitors: SoftwareCompt,
      summary: Summary,
      description: Description
    };
    _axios__WEBPACK_IMPORTED_MODULE_2__.venodrAxios.post("/software/create", data).then(function (res) {
      console.log(res.data);
      fileData.append('id', res.data.data.id);
      setSoftwareId(res.data.data.id);
      _axios__WEBPACK_IMPORTED_MODULE_2__.venodrAxios.post('/software/handle-logo', fileData).then(function (res) {
        if (res.status == 200) {
          react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success('🦄' + res.data.msg, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          });
          setFormSlider(2);
        }
      })["catch"](function (error) {
        if (error.response && error.response.status == 422) {
          var errors = error.response.data.errors;

          for (var key in errors) {
            if (Object.hasOwnProperty.call(errors, key)) {
              var element = errors[key][0];
              console.log(element);
              react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error('🦄' + element, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
              });
            }
          }
        }
      });
    });
  };

  var HandleSecondSubmit = function HandleSecondSubmit(e) {
    e.preventDefault();
    var data = {
      software_id: SoftwareId,
      offer_trial: OfferTrial,
      is_lifetime_free: isLifeTimeFree,
      is_customizable: isCustomizable,
      desktop_platform: DesktopPlatform,
      available_support: AvailableSupport,
      runs_on_mobile_browser: Romb,
      payment_options: PaymentOption,
      is_api_available: IsAPIavailable,
      target_audience: TargetAudience,
      mobile_platform_options: MPO,
      language_available: LA,
      integration: integration
    };
    console.log(data);
    var rules = {
      software_id: "required",
      offer_trial: "required",
      is_lifetime_free: "required",
      is_customizable: "required",
      desktop_platform: "required",
      available_support: "required",
      runs_on_mobile_browser: "required",
      payment_options: "required",
      is_api_available: "required",
      target_audience: "required",
      mobile_platform_options: "required",
      language_available: "required",
      integration: "required"
    };

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.validator)(data, rules)) {
      _axios__WEBPACK_IMPORTED_MODULE_2__.venodrAxios.post('/software_specification/store', data).then(function (res) {
        if (res.status == 201) {
          react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.success('🦄' + res.data.msg, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          });
          setFormSlider(3);
        }
      })["catch"](function (error) {
        if (error.response && error.response.status == 422) {
          var errors = error.response.data.errors;

          for (var key in errors) {
            if (Object.hasOwnProperty.call(errors, key)) {
              var element = errors[key][0];
              console.log(element);
              react_toastify__WEBPACK_IMPORTED_MODULE_7__.toast.error('🦄' + element, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
              });
            }
          }
        }
      });
    }
  };

  var HandleThirdSubmit = function HandleThirdSubmit(e) {
    e.preventDefault();
    var thirdFormData = new FormData();
    thirdFormData.append('screenshots', SS);
    thirdFormData.append('brochure', BrochureLink);
    thirdFormData.append('ebooks', Ebooks);
    thirdFormData.append('video_link', VideoLink);
    thirdFormData.append('whitepapers', Whitepapers);
    thirdFormData.append('pdf', PDF);
    thirdFormData.append('guides', Guide);
    thirdFormData.append('software_id', SoftwareId);
    _axios__WEBPACK_IMPORTED_MODULE_2__.venodrAxios.post('/softwaremedia/create', thirdFormData).then(function (res) {
      return alert(res);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "row",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_toastify__WEBPACK_IMPORTED_MODULE_7__.ToastContainer, {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "col-12 grid-margin",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "card",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "card-body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h4", {
            className: "card-title",
            children: "Add Software"
          }), FormSlider == 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
            className: "form-sample",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "badge",
              children: "1. Basic Details"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-3 col-form-label",
                    children: "Software Name"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-9",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
                      type: "text",
                      onChange: function onChange(e) {
                        return setSoftwareName(e.target.value);
                      },
                      value: SoftwareName
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-3 col-form-label",
                    children: "Product URL"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-9",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
                      type: "text",
                      onChange: function onChange(e) {
                        return setProductURL(e.target.value);
                      },
                      value: ProductURL
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-3 col-form-label",
                    children: "Tagline"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-9",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
                      type: "text",
                      onChange: function onChange(e) {
                        return setTagline(e.target.value);
                      },
                      value: Tagline
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-3 col-form-label",
                    children: "Product Logo"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "col-sm-9",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
                      type: "file",
                      className: "form-control d-none visibility-hidden",
                      id: "customFileLang",
                      lang: "en",
                      onChange: function onChange(e) {
                        return setLogo(e.target.files[0]);
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                      className: "custom-file-label",
                      htmlFor: "customFileLang",
                      children: "Upload image"
                    })]
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-3 col-form-label",
                    children: "Category"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-9",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("select", {
                      className: "form-control",
                      onChange: function onChange(e) {
                        return setCategoryID(e.target.value);
                      },
                      children: Categories.map(function (c, i) {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                          value: c.id,
                          children: c.name
                        }, i);
                      })
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-3 col-form-label",
                    children: "Software Competitors"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-9",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
                      type: "text",
                      onChange: function onChange(e) {
                        return setSoftwareCompt(e.target.value);
                      },
                      value: SoftwareCompt
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
                className: "col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-2 col-form-label",
                    children: "Summary *"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-9 offset-1",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
                      className: "form-control",
                      rows: "5",
                      columns: "2",
                      onChange: function onChange(e) {
                        return setSummary(e.target.value);
                      },
                      value: Summary
                    })
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
                className: "col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-2 col-form-label",
                    children: "Description *"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-9 offset-1",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
                      className: "form-control",
                      rows: "5",
                      columns: "2",
                      onChange: function onChange(e) {
                        return setDescription(e.target.value);
                      },
                      value: Description
                    })
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              type: "submit",
              className: "btn btn-primary mr-2",
              onClick: function onClick(e) {
                return HandleFirstSubmit(e);
              },
              children: "Save & Next"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
              type: "reset",
              className: "btn btn-light",
              children: "Reset"
            })]
          }) : null, FormSlider == 2 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
            className: "form-sample",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "badge",
              children: "2. Specifications"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-12 col-form-label",
                    children: "How is Software accessible? *"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-10",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "d-flex justify-content-around flex-wrap",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "radio",
                            className: "form-check-input",
                            name: "access",
                            value: "Cloud Based"
                          }), " Cloud Based", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "radio",
                            className: "form-check-input",
                            name: "access",
                            value: "On Premises"
                          }), " On Premises", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "radio",
                            className: "form-check-input",
                            name: "access",
                            value: "Hybrid"
                          }), " Hybrid", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-Primary",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "radio",
                            className: "form-check-input",
                            name: "access",
                            value: "Any"
                          }), " Any", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-12 col-form-label",
                    children: "Does this Software Offers Free Trial?"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-12",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "d-flex flex-wrap",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        onChange: function onChange(e) {
                          return setOfferTrial(e.target.value);
                        },
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "radio",
                            className: "form-check-input",
                            name: "freet",
                            value: "1"
                          }), " Yes", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "radio",
                            className: "form-check-input",
                            name: "freet",
                            value: "0"
                          }), " No", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      })]
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-12 col-form-label",
                    children: "Is Customization possible?"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-10",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "d-flex  flex-wrap",
                      onChange: function onChange(e) {
                        return setisCustomizable(e.target.value);
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "radio",
                            className: "form-check-input",
                            name: "customization",
                            value: "1"
                          }), " Yes", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "radio",
                            className: "form-check-input",
                            name: "customization",
                            value: "0"
                          }), " No", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-12 col-form-label",
                    children: "Does the software run on mobile browser? *"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-12",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "d-flex flex-wrap",
                      onChange: function onChange(e) {
                        return setRomb(e.target.value);
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "radio",
                            className: "form-check-input",
                            name: "mobile_supp_b",
                            value: "1"
                          }), " Yes", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "radio",
                            className: "form-check-input",
                            name: "mobile_supp_b",
                            value: "0"
                          }), " No", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      })]
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-12 col-form-label",
                    children: "Does this software has a lifetime free plan? *"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-10",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "d-flex  flex-wrap",
                      onChange: function onChange(e) {
                        return setisLifeTimeFree(e.target.value);
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "radio",
                            className: "form-check-input",
                            name: "lifetime",
                            value: "1"
                          }), " Yes", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "radio",
                            className: "form-check-input",
                            name: "lifetime",
                            value: "0"
                          }), " No", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-12 col-form-label",
                    children: "Are APIs available for this software? *"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-12",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "d-flex flex-wrap",
                      onChange: function onChange(e) {
                        return setIsAPIavailable(e.target.value);
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "radio",
                            className: "form-check-input",
                            name: "is_Api",
                            value: "1"
                          }), " Yes", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "radio",
                            className: "form-check-input",
                            name: "is_Api",
                            value: "0"
                          }), " No", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      })]
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-12 col-form-label",
                    children: "Payment Options *"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-10",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "d-flex  flex-wrap",
                      onChange: function onChange(e) {
                        return setPaymentOption([].concat(_toConsumableArray(PaymentOption), [e.target.value]));
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "po",
                            value: "yearly"
                          }), " Yearly", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "po",
                            value: "monthly"
                          }), " Monthly", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "po",
                            value: "onetime"
                          }), " Onetime (Perpetual license)", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "po",
                            value: "transaction"
                          }), " Transaction", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-12 col-form-label",
                    children: "Target Audience"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-12",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "d-flex flex-wrap",
                      onChange: function onChange(e) {
                        return setTargetAudience([].concat(_toConsumableArray(TargetAudience), [e.target.value]));
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "po",
                            value: "Freelancers"
                          }), " Freelancers", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "po",
                            value: "Startups"
                          }), " Startups", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "po",
                            value: "SMEs"
                          }), " SMEs", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "po",
                            value: "Agencies"
                          }), " Agencies", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "po",
                            value: "Enterprises"
                          }), " Enterprises", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      })]
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-12 col-form-label",
                    children: "Desktop Platforms Options *"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-10",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "d-flex  flex-wrap",
                      onChange: function onChange(e) {
                        return setDesktopPlatform([].concat(_toConsumableArray(DesktopPlatform), [e.target.value]));
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "platforms",
                            value: "Web App"
                          }), " Web App", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "platforms",
                            value: "Windows"
                          }), " Windows", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "platforms",
                            value: "Machintosh"
                          }), " Machintosh", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-12 col-form-label",
                    children: "Mobile Platforms Options"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-12",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "d-flex flex-wrap",
                      onChange: function onChange(e) {
                        return setMPO(e.target.value);
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "mplatforms",
                            value: "IOS/App Store"
                          }), " IOS/App Store", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "mplatforms",
                            value: "Android/Play Store"
                          }), " Androis/Play Store", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      })]
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-12 col-form-label",
                    children: "Aviable Support*"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-10",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "d-flex  flex-wrap",
                      onChange: function onChange(e) {
                        return setAvailableSupport([].concat(_toConsumableArray(AvailableSupport), [e.target.value]));
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "platforms",
                            value: "Email"
                          }), " Email", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "platforms",
                            value: "Phone"
                          }), " Phone", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "platforms",
                            value: "Live Support"
                          }), " Live Support", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "platforms",
                            value: "Training"
                          }), " Training", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "checkbox",
                            className: "form-check-input",
                            name: "platforms",
                            value: "Tickets"
                          }), " Tickets", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-12 col-form-label",
                    children: "Available languages *"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-12",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                      className: "d-flex flex-wrap",
                      onChange: function onChange(e) {
                        return setLA(e.target.value);
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "radio",
                            className: "form-check-input",
                            name: "lang",
                            value: "ENG Only"
                          }), " ENG only", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                        className: "form-check form-check-primary mr-3",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
                          className: "form-check-label",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
                            type: "radio",
                            className: "form-check-input",
                            name: "lang",
                            value: "ENG and few others"
                          }), " ENG and few others", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i", {
                            className: "input-helper"
                          })]
                        })
                      })]
                    })
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-12",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: "row",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    className: "col-sm-2 text-center col-form-label",
                    children: "Integrations"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                    className: "col-sm-9",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
                      className: "form-control",
                      rows: "5",
                      columns: "2",
                      onChange: function onChange(e) {
                        return setintegration(e.target.value);
                      }
                    })
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "my-lg-4 p-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                type: "submit",
                className: "btn btn-primary mr-2",
                onClick: function onClick(e) {
                  return HandleSecondSubmit(e);
                },
                children: "Save & Next"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                type: "reset",
                className: "btn btn-light",
                children: "Reset"
              })]
            })]
          }) : null, FormSlider == 3 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
            className: "form-sample",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
              className: "badge",
              children: "3. Software Media"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-8",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    children: "Screenshots *"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "custom-file",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
                      type: "file",
                      className: "form-control visibility-hidden",
                      id: "ss",
                      lang: "en",
                      onChange: function onChange(e) {
                        return setSS(e.target.files[0]);
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                      className: "custom-file-label",
                      htmlFor: "ss",
                      children: "Upload image"
                    })]
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-8",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    children: "Video Link "
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea", {
                    className: "form-control"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-8",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    children: "Brochure File "
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "custom-file",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
                      type: "file",
                      className: "form-control visibility-hidden",
                      id: "brochureFile",
                      lang: "en",
                      onChange: function onChange(e) {
                        return setBrochureLink(e.target.files[0]);
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                      className: "custom-file-label",
                      htmlFor: "brochureFile",
                      children: "Upload Brochure"
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-8",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    children: "Ebooks "
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "custom-file",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
                      type: "file",
                      className: "form-control visibility-hidden",
                      id: "ebookFile",
                      lang: "en",
                      onChange: function onChange(e) {
                        return setEbooks(e.target.files[0]);
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                      className: "custom-file-label",
                      htmlFor: "ebookFile",
                      children: "Upload Ebook"
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-8",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    children: "Whitepaper "
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "custom-file",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
                      type: "file",
                      className: "form-control visibility-hidden",
                      id: "whitepaper",
                      lang: "en",
                      onChange: function onChange(e) {
                        return setWhitepapers(e.target.files[0]);
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                      className: "custom-file-label",
                      htmlFor: "whitepaper",
                      children: "Upload Whitepaper"
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-8",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    children: "PDF "
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "custom-file",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
                      type: "file",
                      className: "form-control visibility-hidden",
                      id: "PDF",
                      lang: "en",
                      onChange: function onChange(e) {
                        return setPDF(e.target.files[0]);
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                      className: "custom-file-label",
                      htmlFor: "PDF",
                      children: "Upload PDF"
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                className: "col-md-8",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                    children: "Guides "
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: "custom-file",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default.Control, {
                      type: "file",
                      className: "form-control visibility-hidden",
                      id: "Guides",
                      lang: "en",
                      onChange: function onChange(e) {
                        return setGuide(e.target.files[0]);
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
                      className: "custom-file-label",
                      htmlFor: "Guides",
                      children: "Upload Guides"
                    })]
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "my-lg-4 p-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                type: "submit",
                className: "btn btn-primary mr-2",
                onClick: function onClick(e) {
                  return HandleThirdSubmit(e);
                },
                children: "Save & Next"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
                type: "reset",
                className: "btn btn-light",
                children: "Reset"
              })]
            })]
          }) : null, FormSlider == 4 ? fourth : null]
        })
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddSoftware);

/***/ })

}]);