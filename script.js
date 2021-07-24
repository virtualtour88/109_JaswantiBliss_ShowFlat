TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "adjacentPanoramas": [
   {
    "panorama": {
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5",
       "backwardYaw": -180,
       "class": "AdjacentPanorama",
       "yaw": -166.31,
       "distance": 1
      }
     ],
     "label": "Living room",
     "hfovMax": 120,
     "partial": false,
     "class": "Panorama",
     "hfov": 360,
     "vfov": 180,
     "frames": [
      {
       "overlays": [
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_D248C9C0_D852_2CDB_41E8_A42ACC93419C",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "toolTip": "Dining Area",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5, this.camera_D43BD07B_D8D6_FBAC_41E8_96CCBF006589); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_0_HS_1_0.png",
              "height": 30,
              "class": "ImageResourceLevel",
              "width": 30
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -166.31,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -0.94,
           "hfov": 5.62
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_0_HS_1_0_0_map.gif",
              "height": 15,
              "class": "ImageResourceLevel",
              "width": 15
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -0.94,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -166.31,
           "hfov": 5.62
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_D2777D1E_D852_6564_41DA_802A747C24B3",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "toolTip": "Kitchen",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_0_HS_0_0.png",
              "height": 30,
              "class": "ImageResourceLevel",
              "width": 30
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 130.69,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 0.38,
           "hfov": 5.62
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_0_HS_0_0_0_map.gif",
              "height": 15,
              "class": "ImageResourceLevel",
              "width": 15
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 0.38,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 130.69,
           "hfov": 5.62
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_r_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_f_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_b_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_u_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_d_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_l_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_t.jpg",
     "mapLocations": [
      {
       "y": 764.78,
       "angle": 0,
       "class": "PanoramaMapLocation",
       "map": {
        "scaleMode": "fit_inside",
        "image": {
         "levels": [
          {
           "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B.jpeg",
           "height": 1257,
           "class": "ImageResourceLevel",
           "width": 1600
          },
          {
           "grayscale": true,
           "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_lq.jpeg",
           "height": 628,
           "class": "ImageResourceLevel",
           "width": 800
          }
         ],
         "class": "ImageResource"
        },
        "label": "WING-A_FLAT 03",
        "fieldOfViewOverlayInsideOpacity": 0.19,
        "thumbnailUrl": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_t.jpg",
        "overlays": [
         {
          "image": {
           "image": {
            "levels": [
             {
              "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_0.png",
              "height": 74,
              "class": "ImageResourceLevel",
              "width": 65
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 254.82,
           "height": 110,
           "y": 1096.57,
           "class": "HotspotMapOverlayImage"
          },
          "id": "overlay_D48084BE_D8AE_24A7_41EB_05E85D00AD6E",
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "areas": [
           {
            "click": "this.mainPlayList.set('selectedIndex', 0)",
            "toolTip": "Dining Area",
            "mapColor": "#FF0000",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "rollOverDisplay": false,
          "map": {
           "height": 110,
           "y": 1096.59,
           "offsetX": 0,
           "class": "HotspotMapOverlayMap",
           "offsetY": 0,
           "image": {
            "levels": [
             {
              "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_0_map.gif",
              "height": 37,
              "class": "ImageResourceLevel",
              "width": 32
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 254.83
          }
         },
         {
          "image": {
           "image": {
            "levels": [
             {
              "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_1.png",
              "height": 74,
              "class": "ImageResourceLevel",
              "width": 65
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 411.91,
           "height": 110,
           "y": 709.78,
           "class": "HotspotMapOverlayImage"
          },
          "id": "overlay_D46C7DB8_D8AE_24AB_41CD_AB10DFFDCEBE",
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "areas": [
           {
            "click": "this.mainPlayList.set('selectedIndex', 1)",
            "toolTip": "Living Room",
            "mapColor": "#FF0000",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "rollOverDisplay": false,
          "map": {
           "height": 110,
           "y": 709.85,
           "offsetX": 0,
           "class": "HotspotMapOverlayMap",
           "offsetY": 0,
           "image": {
            "levels": [
             {
              "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_1_map.gif",
              "height": 37,
              "class": "ImageResourceLevel",
              "width": 32
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 411.95
          }
         },
         {
          "image": {
           "image": {
            "levels": [
             {
              "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_2.png",
              "height": 74,
              "class": "ImageResourceLevel",
              "width": 65
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 946.9,
           "height": 110,
           "y": 816.48,
           "class": "HotspotMapOverlayImage"
          },
          "id": "overlay_D5EBEBFB_D8B2_2CAD_41D4_B6FD8F6EF9AA",
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "areas": [
           {
            "click": "this.mainPlayList.set('selectedIndex', 2)",
            "toolTip": "Kitchen",
            "mapColor": "#FF0000",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "rollOverDisplay": false,
          "map": {
           "height": 110,
           "y": 816.55,
           "offsetX": 0,
           "class": "HotspotMapOverlayMap",
           "offsetY": 0,
           "image": {
            "levels": [
             {
              "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_2_map.gif",
              "height": 37,
              "class": "ImageResourceLevel",
              "width": 32
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 946.94
          }
         },
         {
          "image": {
           "image": {
            "levels": [
             {
              "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_3.png",
              "height": 74,
              "class": "ImageResourceLevel",
              "width": 65
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 826.78,
           "height": 110,
           "y": 1103.91,
           "class": "HotspotMapOverlayImage"
          },
          "id": "overlay_D43A45BC_D8B2_64AB_41DE_C75D4EA78910",
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "areas": [
           {
            "click": "this.mainPlayList.set('selectedIndex', 6)",
            "toolTip": "Bathroom",
            "mapColor": "#FF0000",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "rollOverDisplay": false,
          "map": {
           "height": 110,
           "y": 1103.94,
           "offsetX": 0,
           "class": "HotspotMapOverlayMap",
           "offsetY": 0,
           "image": {
            "levels": [
             {
              "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_3_map.gif",
              "height": 37,
              "class": "ImageResourceLevel",
              "width": 32
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 826.82
          }
         },
         {
          "image": {
           "image": {
            "levels": [
             {
              "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_4.png",
              "height": 74,
              "class": "ImageResourceLevel",
              "width": 65
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 1412.23,
           "height": 110,
           "y": 684.59,
           "class": "HotspotMapOverlayImage"
          },
          "id": "overlay_D5CF774D_D8B2_25E5_41C1_0AA110D7DDEC",
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "areas": [
           {
            "click": "this.mainPlayList.set('selectedIndex', 3)",
            "toolTip": "Bedroom",
            "mapColor": "#FF0000",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "rollOverDisplay": false,
          "map": {
           "height": 110,
           "y": 684.64,
           "offsetX": 0,
           "class": "HotspotMapOverlayMap",
           "offsetY": 0,
           "image": {
            "levels": [
             {
              "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_4_map.gif",
              "height": 37,
              "class": "ImageResourceLevel",
              "width": 32
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 1412.23
          }
         },
         {
          "image": {
           "image": {
            "levels": [
             {
              "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_5.png",
              "height": 74,
              "class": "ImageResourceLevel",
              "width": 65
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 1662.68,
           "height": 110,
           "y": 1065.38,
           "class": "HotspotMapOverlayImage"
          },
          "id": "overlay_D4703D2B_D8B2_25AD_41E2_510B68AEB2A0",
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "areas": [
           {
            "click": "this.mainPlayList.set('selectedIndex', 5)",
            "toolTip": "M. Bedroom",
            "mapColor": "#FF0000",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "rollOverDisplay": false,
          "map": {
           "height": 110,
           "y": 1065.42,
           "offsetX": 0,
           "class": "HotspotMapOverlayMap",
           "offsetY": 0,
           "image": {
            "levels": [
             {
              "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_5_map.gif",
              "height": 37,
              "class": "ImageResourceLevel",
              "width": 32
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 1662.74
          }
         },
         {
          "image": {
           "image": {
            "levels": [
             {
              "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_6.png",
              "height": 74,
              "class": "ImageResourceLevel",
              "width": 65
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 1397.34,
           "height": 110,
           "y": 1075.75,
           "class": "HotspotMapOverlayImage"
          },
          "id": "overlay_D58B011D_D8B6_7D65_41D7_D5F88788DA46",
          "class": "AreaHotspotMapOverlay",
          "useHandCursor": true,
          "areas": [
           {
            "click": "this.mainPlayList.set('selectedIndex', 4)",
            "toolTip": "M. Bathroom",
            "mapColor": "#FF0000",
            "class": "HotspotMapOverlayArea"
           }
          ],
          "rollOverDisplay": false,
          "map": {
           "height": 110,
           "y": 1075.81,
           "offsetX": 0,
           "class": "HotspotMapOverlayMap",
           "offsetY": 0,
           "image": {
            "levels": [
             {
              "url": "media/map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B_HS_6_map.gif",
              "height": 37,
              "class": "ImageResourceLevel",
              "width": 32
             }
            ],
            "class": "ImageResource"
           },
           "width": 96,
           "x": 1397.41
          }
         }
        ],
        "fieldOfViewOverlayInsideColor": "#00FF00",
        "minimumZoomFactor": 1,
        "class": "Map",
        "fieldOfViewOverlayOutsideColor": "#000000",
        "maximumZoomFactor": 1.79,
        "fieldOfViewOverlayOutsideOpacity": 0,
        "fieldOfViewOverlayRadiusScale": 0.2,
        "initialZoomFactor": 1,
        "width": 2351,
        "height": 1848,
        "id": "map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B"
       },
       "x": 459.91
      }
     ],
     "hfovMin": 60,
     "pitch": 0,
     "id": "panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56"
    },
    "backwardYaw": -180,
    "class": "AdjacentPanorama",
    "yaw": -0.19,
    "distance": 1
   },
   {
    "panorama": {
     "adjacentPanoramas": [
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_DEB8885A_D852_6BEF_41CD_45757741B358",
          "backwardYaw": -180,
          "class": "AdjacentPanorama",
          "yaw": 169.5,
          "distance": 1
         }
        ],
        "label": "Bathroom",
        "hfovMax": 120,
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_D36E275F_D8D2_25E4_41B0_C03884631F78",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "toolTip": "Kitchen",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_DEB8885A_D852_6BEF_41CD_45757741B358, this.camera_D4C2A05B_D8D6_FBEC_41E1_1E427F0D16BD); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_0_HS_0_0.png",
                 "height": 30,
                 "class": "ImageResourceLevel",
                 "width": 30
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 169.5,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -1.31,
              "hfov": 5.62
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_0_HS_0_0_0_map.gif",
                 "height": 15,
                 "class": "ImageResourceLevel",
                 "width": 15
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -1.31,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 169.5,
              "hfov": 5.62
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_r_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_f_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_b_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_u_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_d_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_l_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_t.jpg",
        "mapLocations": [
         {
          "y": 1158.91,
          "angle": 181.43,
          "class": "PanoramaMapLocation",
          "map": "this.map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B",
          "x": 874.78
         }
        ],
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE"
       },
       "backwardYaw": -180,
       "class": "AdjacentPanorama",
       "yaw": -175.12,
       "distance": 1
      },
      {
       "panorama": {
        "adjacentPanoramas": [
         {
          "panorama": {
           "adjacentPanoramas": [
            {
             "panorama": {
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E",
                "backwardYaw": -180,
                "class": "AdjacentPanorama",
                "yaw": -160.31,
                "distance": 1
               }
              ],
              "label": "M. Bathroom",
              "hfovMax": 120,
              "partial": false,
              "class": "Panorama",
              "hfov": 360,
              "vfov": 180,
              "frames": [
               {
                "overlays": [
                 {
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "id": "overlay_D2B45661_D876_27DD_41DB_14C5F5F722FE",
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "areas": [
                   {
                    "toolTip": "M. Bedroom",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "displayTooltipInTouchScreens": true,
                    "click": "this.startPanoramaWithCamera(this.panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E, this.camera_D4DEAFF4_D8D6_E4BB_41E5_C07D352B847E); this.mainPlayList.set('selectedIndex', 5)"
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_0_HS_0_0.png",
                       "height": 30,
                       "class": "ImageResourceLevel",
                       "width": 30
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -160.31,
                    "class": "HotspotPanoramaOverlayImage",
                    "pitch": -2.25,
                    "hfov": 5.62
                   }
                  ],
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "url": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_0_HS_0_0_0_map.gif",
                       "height": 15,
                       "class": "ImageResourceLevel",
                       "width": 15
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": -2.25,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -160.31,
                    "hfov": 5.62
                   }
                  ]
                 }
                ],
                "right": {
                 "levels": [
                  {
                   "url": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_r_hq.jpeg",
                   "height": 608,
                   "class": "ImageResourceLevel",
                   "width": 608
                  }
                 ],
                 "class": "ImageResource"
                },
                "front": {
                 "levels": [
                  {
                   "url": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_f_hq.jpeg",
                   "height": 608,
                   "class": "ImageResourceLevel",
                   "width": 608
                  }
                 ],
                 "class": "ImageResource"
                },
                "class": "CubicPanoramaFrame",
                "back": {
                 "levels": [
                  {
                   "url": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_b_hq.jpeg",
                   "height": 608,
                   "class": "ImageResourceLevel",
                   "width": 608
                  }
                 ],
                 "class": "ImageResource"
                },
                "top": {
                 "levels": [
                  {
                   "url": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_u_hq.jpeg",
                   "height": 608,
                   "class": "ImageResourceLevel",
                   "width": 608
                  }
                 ],
                 "class": "ImageResource"
                },
                "bottom": {
                 "levels": [
                  {
                   "url": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_d_hq.jpeg",
                   "height": 608,
                   "class": "ImageResourceLevel",
                   "width": 608
                  }
                 ],
                 "class": "ImageResource"
                },
                "left": {
                 "levels": [
                  {
                   "url": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_l_hq.jpeg",
                   "height": 608,
                   "class": "ImageResourceLevel",
                   "width": 608
                  }
                 ],
                 "class": "ImageResource"
                },
                "thumbnailUrl": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_t.jpg"
               }
              ],
              "thumbnailUrl": "media/panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_t.jpg",
              "mapLocations": [
               {
                "y": 1130.75,
                "angle": 182.08,
                "class": "PanoramaMapLocation",
                "map": "this.map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B",
                "x": 1445.34
               }
              ],
              "hfovMin": 60,
              "pitch": 0,
              "id": "panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1"
             },
             "backwardYaw": -180,
             "class": "AdjacentPanorama",
             "yaw": -157.5,
             "distance": 1
            },
            {
             "panorama": "this.panorama_D077E67A_D852_67AF_41E4_15431A436510",
             "backwardYaw": -180,
             "class": "AdjacentPanorama",
             "yaw": -146.06,
             "distance": 1
            }
           ],
           "label": "M. Bedroom",
           "hfovMax": 120,
           "partial": false,
           "class": "Panorama",
           "hfov": 360,
           "vfov": 180,
           "frames": [
            {
             "overlays": [
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_D2E4EA42_D876_2FDC_418C_3EE4558EF7D3",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "toolTip": "M. Bathroom",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1, this.camera_D4D1D022_D8D6_FB5F_41E2_65DB040E0A5E); this.mainPlayList.set('selectedIndex', 4)"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_0_HS_1_0.png",
                    "height": 30,
                    "class": "ImageResourceLevel",
                    "width": 30
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -157.5,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -0.37,
                 "hfov": 5.62
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_0_HS_1_0_0_map.gif",
                    "height": 15,
                    "class": "ImageResourceLevel",
                    "width": 15
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -0.37,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -157.5,
                 "hfov": 5.62
                }
               ]
              },
              {
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "id": "overlay_D2F828FD_D876_2CA5_41E5_72BED49E3F14",
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "areas": [
                {
                 "toolTip": "Bedroom",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "displayTooltipInTouchScreens": true,
                 "click": "this.startPanoramaWithCamera(this.panorama_D077E67A_D852_67AF_41E4_15431A436510, this.camera_D4CDF032_D8D6_FBBF_41D3_25FF9A88F82B); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_0_HS_0_0.png",
                    "height": 30,
                    "class": "ImageResourceLevel",
                    "width": 30
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -146.06,
                 "class": "HotspotPanoramaOverlayImage",
                 "pitch": -0.37,
                 "hfov": 5.62
                }
               ],
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_0_HS_0_0_0_map.gif",
                    "height": 15,
                    "class": "ImageResourceLevel",
                    "width": 15
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -0.37,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -146.06,
                 "hfov": 5.62
                }
               ]
              }
             ],
             "right": {
              "levels": [
               {
                "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_r_hq.jpeg",
                "height": 608,
                "class": "ImageResourceLevel",
                "width": 608
               }
              ],
              "class": "ImageResource"
             },
             "front": {
              "levels": [
               {
                "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_f_hq.jpeg",
                "height": 608,
                "class": "ImageResourceLevel",
                "width": 608
               }
              ],
              "class": "ImageResource"
             },
             "class": "CubicPanoramaFrame",
             "back": {
              "levels": [
               {
                "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_b_hq.jpeg",
                "height": 608,
                "class": "ImageResourceLevel",
                "width": 608
               }
              ],
              "class": "ImageResource"
             },
             "top": {
              "levels": [
               {
                "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_u_hq.jpeg",
                "height": 608,
                "class": "ImageResourceLevel",
                "width": 608
               }
              ],
              "class": "ImageResource"
             },
             "bottom": {
              "levels": [
               {
                "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_d_hq.jpeg",
                "height": 608,
                "class": "ImageResourceLevel",
                "width": 608
               }
              ],
              "class": "ImageResource"
             },
             "left": {
              "levels": [
               {
                "url": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_l_hq.jpeg",
                "height": 608,
                "class": "ImageResourceLevel",
                "width": 608
               }
              ],
              "class": "ImageResource"
             },
             "thumbnailUrl": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_t.jpg"
            }
           ],
           "thumbnailUrl": "media/panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_t.jpg",
           "mapLocations": [
            {
             "y": 1120.38,
             "angle": 91.25,
             "class": "PanoramaMapLocation",
             "map": "this.map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B",
             "x": 1710.68
            }
           ],
           "hfovMin": 60,
           "pitch": 0,
           "id": "panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E"
          },
          "backwardYaw": -180,
          "class": "AdjacentPanorama",
          "yaw": -158.44,
          "distance": 1
         },
         {
          "panorama": "this.panorama_DEB8885A_D852_6BEF_41CD_45757741B358",
          "backwardYaw": -180,
          "class": "AdjacentPanorama",
          "yaw": -148.87,
          "distance": 1
         }
        ],
        "label": "Bedroom",
        "hfovMax": 120,
        "partial": false,
        "class": "Panorama",
        "hfov": 360,
        "vfov": 180,
        "frames": [
         {
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_D200B39B_D872_1D6D_419A_6DA7E10A13E5",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "toolTip": "M. Bedroom",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true,
              "click": "this.startPanoramaWithCamera(this.panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E, this.camera_D43F106B_D8D6_FBAC_41E5_BE09CB18AEE4); this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_0_HS_0_0.png",
                 "height": 30,
                 "class": "ImageResourceLevel",
                 "width": 30
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -158.44,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 0.38,
              "hfov": 5.62
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_0_HS_0_0_0_map.gif",
                 "height": 15,
                 "class": "ImageResourceLevel",
                 "width": 15
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 0.38,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -158.44,
              "hfov": 5.62
             }
            ]
           },
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_CDE8A900_D85E_2D5B_41E1_D35A02BCBEA2",
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "areas": [
             {
              "toolTip": "Kitchen",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "displayTooltipInTouchScreens": true,
              "click": "this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_0_HS_1_0.png",
                 "height": 30,
                 "class": "ImageResourceLevel",
                 "width": 30
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -148.87,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": 0.56,
              "hfov": 5.62
             }
            ],
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_0_HS_1_0_0_map.gif",
                 "height": 15,
                 "class": "ImageResourceLevel",
                 "width": 15
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 0.56,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -148.87,
              "hfov": 5.62
             }
            ]
           }
          ],
          "right": {
           "levels": [
            {
             "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_r_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "front": {
           "levels": [
            {
             "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_f_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "class": "CubicPanoramaFrame",
          "back": {
           "levels": [
            {
             "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_b_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "top": {
           "levels": [
            {
             "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_u_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "bottom": {
           "levels": [
            {
             "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_d_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "left": {
           "levels": [
            {
             "url": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_l_hq.jpeg",
             "height": 608,
             "class": "ImageResourceLevel",
             "width": 608
            }
           ],
           "class": "ImageResource"
          },
          "thumbnailUrl": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_t.jpg"
         }
        ],
        "thumbnailUrl": "media/panorama_D077E67A_D852_67AF_41E4_15431A436510_t.jpg",
        "mapLocations": [
         {
          "y": 739.59,
          "angle": 0,
          "class": "PanoramaMapLocation",
          "map": "this.map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B",
          "x": 1460.23
         }
        ],
        "hfovMin": 60,
        "pitch": 0,
        "id": "panorama_D077E67A_D852_67AF_41E4_15431A436510"
       },
       "backwardYaw": -180,
       "class": "AdjacentPanorama",
       "yaw": 161.63,
       "distance": 1
      },
      {
       "panorama": "this.panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5",
       "backwardYaw": -180,
       "class": "AdjacentPanorama",
       "yaw": -159.37,
       "distance": 1
      }
     ],
     "label": "Kitchen",
     "hfovMax": 120,
     "partial": false,
     "class": "Panorama",
     "hfov": 360,
     "vfov": 180,
     "frames": [
      {
       "overlays": [
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_D20A91B9_D852_3CAD_41E1_4E173E6F1E38",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "toolTip": "Dining Area",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5, this.camera_D4C6404C_D8D6_FBE4_41B1_30E92F8F1CAD); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_0_HS_1_0.png",
              "height": 30,
              "class": "ImageResourceLevel",
              "width": 30
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -159.37,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 1.5,
           "hfov": 5.62
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_0_HS_1_0_0_map.gif",
              "height": 15,
              "class": "ImageResourceLevel",
              "width": 15
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 1.5,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -159.37,
           "hfov": 5.62
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_D20B468D_D87E_6764_41EA_2B31285DEEB5",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "toolTip": "Bedroom",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_0_HS_0_0.png",
              "height": 30,
              "class": "ImageResourceLevel",
              "width": 30
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 161.63,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 1.69,
           "hfov": 5.62
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_0_HS_0_0_0_map.gif",
              "height": 15,
              "class": "ImageResourceLevel",
              "width": 15
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 1.69,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 161.63,
           "hfov": 5.62
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_D3010299_D8D2_1F6D_41A8_058D1B2D2C0C",
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "areas": [
          {
           "toolTip": "Bathroom",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE, this.camera_D4CA303C_D8D6_FBAB_41E9_BAF58CB4041F); this.mainPlayList.set('selectedIndex', 6)"
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_0_HS_2_0.png",
              "height": 30,
              "class": "ImageResourceLevel",
              "width": 30
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -175.12,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 1.13,
           "hfov": 5.62
          }
         ],
         "maps": [
          {
           "image": {
            "levels": [
             {
              "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_0_HS_2_0_0_map.gif",
              "height": 15,
              "class": "ImageResourceLevel",
              "width": 15
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 1.13,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -175.12,
           "hfov": 5.62
          }
         ]
        }
       ],
       "right": {
        "levels": [
         {
          "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_r_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "front": {
        "levels": [
         {
          "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_f_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "class": "CubicPanoramaFrame",
       "back": {
        "levels": [
         {
          "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_b_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "top": {
        "levels": [
         {
          "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_u_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "bottom": {
        "levels": [
         {
          "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_d_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "left": {
        "levels": [
         {
          "url": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_l_hq.jpeg",
          "height": 608,
          "class": "ImageResourceLevel",
          "width": 608
         }
        ],
        "class": "ImageResource"
       },
       "thumbnailUrl": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_t.jpg"
      }
     ],
     "thumbnailUrl": "media/panorama_DEB8885A_D852_6BEF_41CD_45757741B358_t.jpg",
     "mapLocations": [
      {
       "y": 871.48,
       "angle": 0,
       "class": "PanoramaMapLocation",
       "map": "this.map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B",
       "x": 994.9
      }
     ],
     "hfovMin": 60,
     "pitch": 0,
     "id": "panorama_DEB8885A_D852_6BEF_41CD_45757741B358"
    },
    "backwardYaw": -180,
    "class": "AdjacentPanorama",
    "yaw": 55.31,
    "distance": 1
   }
  ],
  "label": "Dining Area",
  "hfovMax": 120,
  "partial": false,
  "class": "Panorama",
  "hfov": 360,
  "vfov": 180,
  "frames": [
   {
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D16A8DC6_D85E_24E4_41DF_A4EF97220BF3",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "toolTip": "Living Room",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "click": "this.startPanoramaWithCamera(this.panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56, this.camera_D4D9A003_D8D6_FB5D_41E2_B3AD01ABB539); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_0_HS_0_0.png",
           "height": 30,
           "class": "ImageResourceLevel",
           "width": 30
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -0.19,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -2.62,
        "hfov": 5.62
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_0_HS_0_0_0_map.gif",
           "height": 15,
           "class": "ImageResourceLevel",
           "width": 15
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.62,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -0.19,
        "hfov": 5.62
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_D25E6120_D85E_7D5B_41D2_7DE6BA04E9D3",
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "areas": [
       {
        "toolTip": "Kitchen",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "click": "this.startPanoramaWithCamera(this.panorama_DEB8885A_D852_6BEF_41CD_45757741B358, this.camera_D4D50013_D8D6_FB7D_41E0_5FC879B46D37); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_0_HS_1_0.png",
           "height": 30,
           "class": "ImageResourceLevel",
           "width": 30
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 55.31,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -2.62,
        "hfov": 5.62
       }
      ],
      "maps": [
       {
        "image": {
         "levels": [
          {
           "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_0_HS_1_0_0_map.gif",
           "height": 15,
           "class": "ImageResourceLevel",
           "width": 15
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.62,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 55.31,
        "hfov": 5.62
       }
      ]
     }
    ],
    "right": {
     "levels": [
      {
       "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_r_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "front": {
     "levels": [
      {
       "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_f_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "class": "CubicPanoramaFrame",
    "back": {
     "levels": [
      {
       "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_b_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "top": {
     "levels": [
      {
       "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_u_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "bottom": {
     "levels": [
      {
       "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_d_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "left": {
     "levels": [
      {
       "url": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_l_hq.jpeg",
       "height": 608,
       "class": "ImageResourceLevel",
       "width": 608
      }
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_t.jpg"
   }
  ],
  "thumbnailUrl": "media/panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_t.jpg",
  "mapLocations": [
   {
    "y": 1151.57,
    "angle": -1.75,
    "class": "PanoramaMapLocation",
    "map": "this.map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B",
    "x": 302.82
   }
  ],
  "hfovMin": 60,
  "pitch": 0,
  "id": "panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5"
 },
 {
  "buttonRestart": {
   "borderSize": 0,
   "transparencyActive": true,
   "paddingLeft": 0,
   "borderRadius": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
   "verticalAlign": "middle",
   "mode": "push",
   "minHeight": 0,
   "paddingTop": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25_pressed.png",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "cursor": "hand",
   "width": 40,
   "horizontalAlign": "center",
   "height": 40,
   "paddingRight": 0
  },
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "buttonZoomOut": {
   "borderSize": 0,
   "transparencyActive": true,
   "paddingLeft": 0,
   "borderRadius": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
   "verticalAlign": "middle",
   "mode": "push",
   "minHeight": 0,
   "paddingTop": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB_pressed.png",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "cursor": "hand",
   "width": 32,
   "horizontalAlign": "center",
   "height": 32,
   "paddingRight": 0
  },
  "displayPlaybackBar": true,
  "buttonMoveRight": {
   "borderSize": 0,
   "transparencyActive": true,
   "paddingLeft": 0,
   "borderRadius": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
   "verticalAlign": "middle",
   "mode": "push",
   "minHeight": 0,
   "paddingTop": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C_pressed.png",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "cursor": "hand",
   "width": 32,
   "horizontalAlign": "center",
   "height": 32,
   "paddingRight": 0
  },
  "buttonPause": {
   "borderSize": 0,
   "transparencyActive": true,
   "paddingLeft": 0,
   "borderRadius": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
   "verticalAlign": "middle",
   "mode": "toggle",
   "minHeight": 0,
   "paddingTop": 0,
   "shadow": false,
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1_pressed.png",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "cursor": "hand",
   "width": 40,
   "horizontalAlign": "center",
   "height": 40,
   "paddingRight": 0
  },
  "buttonMoveUp": {
   "borderSize": 0,
   "transparencyActive": true,
   "paddingLeft": 0,
   "borderRadius": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
   "verticalAlign": "middle",
   "mode": "push",
   "minHeight": 0,
   "paddingTop": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689_pressed.png",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "cursor": "hand",
   "width": 32,
   "horizontalAlign": "center",
   "height": 32,
   "paddingRight": 0
  },
  "buttonPlayLeft": {
   "borderSize": 0,
   "transparencyActive": true,
   "paddingLeft": 0,
   "borderRadius": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
   "verticalAlign": "middle",
   "mode": "push",
   "minHeight": 0,
   "paddingTop": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D1_76579067E321_pressed.png",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "cursor": "hand",
   "width": 40,
   "horizontalAlign": "center",
   "height": 40,
   "paddingRight": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPlayRight": {
   "borderSize": 0,
   "transparencyActive": true,
   "paddingLeft": 0,
   "borderRadius": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
   "verticalAlign": "middle",
   "mode": "push",
   "minHeight": 0,
   "paddingTop": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B_pressed.png",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "cursor": "hand",
   "width": 40,
   "horizontalAlign": "center",
   "height": 40,
   "paddingRight": 0
  },
  "buttonZoomIn": {
   "borderSize": 0,
   "transparencyActive": true,
   "paddingLeft": 0,
   "borderRadius": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
   "verticalAlign": "middle",
   "mode": "push",
   "minHeight": 0,
   "paddingTop": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D_pressed.png",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "cursor": "hand",
   "width": 32,
   "horizontalAlign": "center",
   "height": 32,
   "paddingRight": 0
  },
  "buttonMoveDown": {
   "borderSize": 0,
   "transparencyActive": true,
   "paddingLeft": 0,
   "borderRadius": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA",
   "verticalAlign": "middle",
   "mode": "push",
   "minHeight": 0,
   "paddingTop": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA_pressed.png",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "cursor": "hand",
   "width": 32,
   "horizontalAlign": "center",
   "height": 32,
   "paddingRight": 0
  },
  "touchControlMode": "drag_acceleration",
  "buttonMoveLeft": {
   "borderSize": 0,
   "transparencyActive": true,
   "paddingLeft": 0,
   "borderRadius": 0,
   "id": "IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
   "verticalAlign": "middle",
   "mode": "push",
   "minHeight": 0,
   "paddingTop": 0,
   "shadow": false,
   "rollOverIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_rollover.png",
   "minWidth": 0,
   "class": "IconButton",
   "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08.png",
   "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08_pressed.png",
   "paddingBottom": 0,
   "backgroundOpacity": 0,
   "cursor": "hand",
   "width": 32,
   "horizontalAlign": "center",
   "height": 32,
   "paddingRight": 0
  }
 },
 {
  "viewerArea": "this.MapViewer",
  "buttonZoomOut": "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "buttonZoomIn": "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D",
  "movementMode": "constrained"
 },
 {
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "id": "sequence_CDC99636_D8BE_67A7_41CE_826699182355",
   "class": "PanoramaCameraSequence"
  },
  "timeToIdle": 2000,
  "id": "panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_camera",
  "class": "PanoramaCamera",
  "initialSequence": "this.sequence_CDC99636_D8BE_67A7_41CE_826699182355",
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56",
 {
  "id": "panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_DEB8885A_D852_6BEF_41CD_45757741B358",
 {
  "id": "panorama_DEB8885A_D852_6BEF_41CD_45757741B358_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_D077E67A_D852_67AF_41E4_15431A436510",
 {
  "id": "panorama_D077E67A_D852_67AF_41E4_15431A436510_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1",
 {
  "id": "panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E",
 {
  "id": "panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE",
 {
  "id": "panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_camera",
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "initialPosition": {
   "pitch": 0,
   "class": "PanoramaCameraPosition",
   "yaw": 0
  },
  "automaticZoomSpeed": 10
 },
 {
  "items": [
   {
    "media": "this.panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F8847849_D872_2BED_41D1_FEC21A90D18A, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_F8847849_D872_2BED_41D1_FEC21A90D18A",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DEBC5985_D852_6D65_41D5_F6C7DAFEA1F5_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "media": "this.panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F884F84A_D872_2BEF_41AD_F0B7B2180045, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_F884F84A_D872_2BEF_41AD_F0B7B2180045",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DEBC4AA1_D852_6F5D_41DC_552EFC0B1D56_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "media": "this.panorama_DEB8885A_D852_6BEF_41CD_45757741B358",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F88B184A_D872_2BEF_41D0_53FE05F68EC7, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_F88B184A_D872_2BEF_41D0_53FE05F68EC7",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DEB8885A_D852_6BEF_41CD_45757741B358_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "media": "this.panorama_D077E67A_D852_67AF_41E4_15431A436510",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F88B884A_D872_2BEF_41DD_EE883738D805, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_F88B884A_D872_2BEF_41DD_EE883738D805",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_D077E67A_D852_67AF_41E4_15431A436510_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "media": "this.panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F88A084B_D872_2BED_41D3_2F7D74D3AA9D, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_F88A084B_D872_2BED_41D3_2F7D74D3AA9D",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DEBCBBCD_D852_6CE4_41D7_BDFB7FE76CE1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "media": "this.panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F88A884B_D872_2BED_41E0_E693B4D7A3C9, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_F88A884B_D872_2BED_41E0_E693B4D7A3C9",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_DEBCACE8_D852_64AB_41C5_AC317933DC1E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "media": "this.panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F889784B_D872_2BED_41D2_E2C4FBFC9E0F, this.MapViewerMapPlayer)",
    "id": "PanoramaPlayListItem_F889784B_D872_2BED_41D2_E2C4FBFC9E0F",
    "class": "PanoramaPlayListItem",
    "camera": "this.panorama_D4EBBCB1_D8DE_24BD_41E9_596B8BAFF6DE_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 "this.map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B",
 {
  "items": [
   {
    "media": "this.map_D43B1F65_D8D6_25A5_41DB_AD94E731FB2B",
    "player": "this.MapViewerMapPlayer",
    "class": "MapPlayListItem",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ],
  "id": "playList_F8852849_D872_2BED_41E9_BC44E27B274A",
  "class": "PlayList"
 },
 {
  "id": "audio_CF5DFFE3_D852_64DD_41CE_45DEC2DB8B0C",
  "class": "MediaAudio",
  "autoplay": true,
  "audio": {
   "oggUrl": "media/audio_CF5DFFE3_D852_64DD_41CE_45DEC2DB8B0C.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_CF5DFFE3_D852_64DD_41CE_45DEC2DB8B0C.mp3"
  }
 }
], "children": [
 {
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "progressBarBorderSize": 0,
  "top": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowOpacity": 0,
  "transitionMode": "blending",
  "paddingLeft": 0,
  "borderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontFamily": "Arial",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 4,
  "toolTipFontWeight": "normal",
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "toolTipTextShadowBlurRadius": 3,
  "shadow": false,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "toolTipOpacity": 1,
  "toolTipPaddingRight": 6,
  "paddingBottom": 0,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressLeft": 10,
  "playbackBarBorderSize": 2,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "toolTipShadowSpread": 0,
  "playbackBarLeft": 0,
  "borderSize": 0,
  "width": "100%",
  "playbackBarHeadHeight": 30,
  "id": "MainViewer",
  "playbackBarHeadBorderSize": 0,
  "paddingRight": 0,
  "progressRight": 10,
  "progressOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "height": "100%",
  "progressBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipShadowVerticalLength": 0,
  "progressBarOpacity": 1,
  "playbackBarBottom": 10,
  "progressBorderColor": "#AAAAAA",
  "progressBottom": 1,
  "minHeight": 50,
  "progressHeight": 20,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "paddingTop": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBorderSize": 2,
  "minWidth": 100,
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "left": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeight": 20,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipFontStyle": "normal",
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarRight": 0,
  "playbackBarHeadShadowHorizontalLength": 0
 },
 {
  "scrollBarColor": "#000000",
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "scrollBarColor": "#000000",
    "height": "95.07%",
    "borderSize": 0,
    "gap": 4,
    "scrollBarOpacity": 0.5,
    "children": [
     "this.IconButton_570E2E34_5EBE_63DE_41BF_4A1E5F2D40AB",
     "this.IconButton_570E2E34_5EBE_63DE_41D3_A0CB69EBDE25",
     "this.IconButton_570E2E34_5EBE_63DE_41D1_76579067E321",
     "this.IconButton_570E2E34_5EBE_63DE_41D0_8EA6B8C16A08",
     {
      "scrollBarColor": "#000000",
      "height": "100%",
      "borderSize": 0,
      "gap": 4,
      "scrollBarOpacity": 0.5,
      "children": [
       "this.IconButton_570E2E34_5EBE_63DE_41C7_41F80DEDE689",
       "this.IconButton_570E2E34_5EBE_63DE_41B8_BB2B515545D1",
       "this.IconButton_570E2E34_5EBE_63DE_41B6_6A9E5D4DE6FA"
      ],
      "paddingLeft": 0,
      "borderRadius": 0,
      "contentOpaque": false,
      "id": "Container_570E2E34_5EBE_63DE_41C3_223EC62DD869",
      "verticalAlign": "middle",
      "minHeight": 20,
      "scrollBarVisible": "rollOver",
      "paddingTop": 0,
      "scrollBarWidth": 10,
      "shadow": false,
      "minWidth": 20,
      "class": "Container",
      "scrollBarMargin": 2,
      "layout": "vertical",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "overflow": "hidden",
      "width": 40,
      "horizontalAlign": "center",
      "paddingRight": 0
     },
     "this.IconButton_570E2E34_5EBE_63DE_417E_9FF89E99273C",
     "this.IconButton_570E2E34_5EBE_63DE_41C1_73844A18216B",
     {
      "borderSize": 0,
      "transparencyActive": true,
      "paddingLeft": 0,
      "borderRadius": 0,
      "id": "IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
      "verticalAlign": "middle",
      "mode": "toggle",
      "minHeight": 0,
      "paddingTop": 0,
      "shadow": false,
      "minWidth": 0,
      "class": "IconButton",
      "iconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B.png",
      "pressedIconURL": "skin/IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B_pressed.png",
      "paddingBottom": 0,
      "backgroundOpacity": 0,
      "cursor": "hand",
      "width": 40,
      "horizontalAlign": "center",
      "height": 40,
      "paddingRight": 0
     },
     "this.IconButton_570E2E34_5EBE_63DE_41CF_DC0B2946505D"
    ],
    "paddingLeft": 0,
    "borderRadius": 0,
    "contentOpaque": false,
    "id": "Container_570E2E34_5EBE_63DE_41C2_D3D9C61EAF1F",
    "verticalAlign": "middle",
    "minHeight": 20,
    "scrollBarVisible": "rollOver",
    "paddingTop": 0,
    "scrollBarWidth": 10,
    "shadow": false,
    "minWidth": 360,
    "class": "Container",
    "scrollBarMargin": 2,
    "layout": "horizontal",
    "paddingBottom": 0,
    "backgroundOpacity": 0,
    "overflow": "hidden",
    "width": 360,
    "horizontalAlign": "center",
    "paddingRight": 0
   }
  ],
  "bottom": "0%",
  "paddingLeft": 0,
  "borderRadius": 0,
  "contentOpaque": false,
  "verticalAlign": "middle",
  "minHeight": 1,
  "scrollBarVisible": "rollOver",
  "paddingTop": 0,
  "scrollBarWidth": 10,
  "shadow": false,
  "minWidth": 1,
  "class": "Container",
  "left": "0%",
  "scrollBarMargin": 2,
  "layout": "horizontal",
  "paddingBottom": 0,
  "backgroundOpacity": 0,
  "overflow": "scroll",
  "horizontalAlign": "center",
  "width": "100%",
  "height": 142,
  "borderSize": 0,
  "paddingRight": 0
 },
 {
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 4,
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "bottom": "1.18%",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipShadowColor": "#333333",
  "paddingLeft": 0,
  "borderRadius": 0,
  "toolTipFontFamily": "Arial",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarBorderRadius": 4,
  "toolTipFontWeight": "normal",
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "toolTipTextShadowBlurRadius": 3,
  "shadow": false,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "progressLeft": 10,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "paddingBottom": 0,
  "playbackBarLeft": 0,
  "playbackBarBorderSize": 2,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "toolTipShadowSpread": 0,
  "borderSize": 0,
  "width": "23.275%",
  "playbackBarHeadHeight": 30,
  "id": "MapViewer",
  "playbackBarHeadBorderSize": 0,
  "paddingRight": 0,
  "progressRight": 10,
  "progressOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingLeft": 6,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadow": true,
  "toolTipFontColor": "#606060",
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadOpacity": 1,
  "height": "27.201%",
  "progressBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipShadowVerticalLength": 0,
  "progressBarOpacity": 1,
  "playbackBarBottom": 0,
  "progressBorderColor": "#AAAAAA",
  "progressBottom": 2,
  "minHeight": 1,
  "progressHeight": 20,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "paddingTop": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressBorderSize": 2,
  "minWidth": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeight": 20,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBorderSize": 0,
  "right": "1.27%",
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadWidth": 6,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarRight": 0,
  "playbackBarHeadShadowHorizontalLength": 0
 }
], 
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "gap": 10,
 "buttonToggleMute": "this.IconButton_570E2E34_5EBE_63DE_41B3_E36925A8158B",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "start": "this.playAudioList([this.audio_CF5DFFE3_D852_64DD_41CE_45DEC2DB8B0C]); this.mainPlayList.set('selectedIndex', 0); this.playList_F8852849_D872_2BED_41E9_BC44E27B274A.set('selectedIndex', 0)",
 "scripts": {
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){    var self = this;   var endObject = undefined;   var changePlayListFunction = function(event){       if(event.data.previousSelectedIndex == index){           if(changeFunction) changeFunction();           if(endFunction) endObject.unbind('end', endFunction, self);           playList.unbind('change', changePlayListFunction, self);       }   };   if(endFunction){       var playListItem = playList.get('items')[index];       var playListItemClass = playListItem.get('class');       if(playListItemClass == 'PanoramaPlayListItem'){           var camera = playListItem.get('camera');           endObject = camera.get('initialSequence');           if(!endObject) return;       }       else{           endObject = playListItem.get('media');       }       endObject.bind('end', endFunction, this);   }   playList.bind('change', changePlayListFunction, this); },
  "pauseGlobalAudios": function(caller){    var audios = window.currentGlobalAudios;   window.currentGlobalAudiosActionCaller = caller;   if(!audios) return;   for(var audio in audios){       audios[audio].pause();   } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){    var resetFunction = function(){       panoramaPlayListItem.unbind('stop', resetFunction, this);       player.set('mapPlayer', null);   };   panoramaPlayListItem.bind('stop', resetFunction, this);   var player = panoramaPlayListItem.get('player');   player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){    var playListItem = playList.get('items')[index];   var video = playListItem.get('media');   if(video.get('cues').length == 0)       return;   var player = playListItem.get('player');   var cues = [];   var changeFunction = function(){       if(playList.get('selectedIndex') != index){           video.unbind('cueChange', cueChangeFunction, this);           playList.unbind('change', changeFunction, this);       }   };   var cueChangeFunction = function(event){       var activeCues = event.data.activeCues;       for(var i = 0, count = cues.length; i<count; ++i){           var cue = cues[i];           if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){               cue.trigger('end');           }       }       cues = activeCues;   };   video.bind('cueChange', cueChangeFunction, this);   playList.bind('change', changeFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){    var self = this;   var closeFunction = function(){       self.MainViewer.set('toolTipEnabled', true);       this.resumePlayers(playersPaused, !containsAudio);       if(isVideo) {           this.unbind('resize', resizeFunction, this);       }       w.unbind('close', closeFunction, this);   };   var endFunction = function(){       w.hide();   };   var resizeFunction = function(){       var parentWidth = self.get('actualWidth');       var parentHeight = self.get('actualHeight');       var mediaWidth = media.get('width');       var mediaHeight = media.get('height');       var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100;       var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100;       var windowWidth = popupMaxWidthNumber * parentWidth;       var windowHeight = popupMaxHeightNumber * parentHeight;       var footerHeight = w.get('footerHeight');       var headerHeight = w.get('headerHeight');       if(!headerHeight) {           var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom');           var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom');           headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight;           headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom');       }       if(!footerHeight) {           footerHeight = 0;       }       var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight');       var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom');       var parentAspectRatio = contentWindowWidth / contentWindowHeight;       var mediaAspectRatio = mediaWidth / mediaHeight;       if(parentAspectRatio > mediaAspectRatio) {           windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight');       }       else {           windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom');       }       if(windowWidth > parentWidth * popupMaxWidthNumber) {           windowWidth = parentWidth * popupMaxWidthNumber;       }       if(windowHeight > parentHeight * popupMaxHeightNumber) {           windowHeight = parentHeight * popupMaxHeightNumber;       }       w.set('width', windowWidth);       w.set('height', windowHeight);       w.set('x', (parentWidth - w.get('actualWidth')) * 0.5);       w.set('y', (parentHeight - w.get('actualHeight')) * 0.5);   };   if(autoCloseWhenFinished){       this.executeFunctionWhenChange(playList, 0, endFunction);   }   var isVideo = media.get('class') == 'Video';   if(isVideo){       this.bind('resize', resizeFunction, this);       resizeFunction();   }   else {       w.set('width', popupMaxWidth);       w.set('height', popupMaxHeight);   }   this.MainViewer.set('toolTipEnabled', false);   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "changeBackgroundWhilePlay": function(playList, index, color){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           playList.unbind('change', changeFunction, this);           if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){               viewerArea.set('backgroundColor', backgroundColorBackup);               viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup);           }       }   };   var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var viewerArea = player.get('viewerArea');   var backgroundColorBackup = viewerArea.get('backgroundColor');   var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios');   var colorRatios = [0];   if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){       viewerArea.set('backgroundColor', color);       viewerArea.set('backgroundColorRatios', colorRatios);       playList.bind('change', changeFunction, this);   } },
  "shareGoogle": function(url){    window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){    var audios = window.currentGlobalAudios;   if(!audios) return;   var resumeFunction = this.resumeGlobalAudios;   var endFunction = function(){       if(playList.get('selectedIndex') != index) {           resumeFunction(caller);       }   };   this.pauseGlobalAudios(caller);   this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "playGlobalAudio": function(audio, endCallback){    var endFunction = function(){       audio.unbind('end', endFunction, this);       this.stopGlobalAudio(audio);       if(endCallback)           endCallback();   };   audio = this.getGlobalAudio(audio);   var audios = window.currentGlobalAudios;   if(!audios){       audios = window.currentGlobalAudios = {};   }   audios[audio.get('id')] = audio;   if(audio.get('state') == 'playing'){       return;   }   if(!audio.get('loop')){       audio.bind('end', endFunction, this);   }   audio.play(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){    var endFunction = function(){       if(playList.get('selectedIndex') == fromIndex)           playList.set('selectedIndex', toIndex);   };   this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "registerKey": function(key, value){    window[key] = value; },
  "playAudioList": function(audios){    if(audios.length == 0) return;   var currentAudioCount = -1;   var currentAudio;   var playGlobalAudioFunction = this.playGlobalAudio;   var playNext = function(){       if(++currentAudioCount >= audios.length)           currentAudioCount = 0;       currentAudio = audios[currentAudioCount];       playGlobalAudioFunction(currentAudio, playNext);   };   playNext(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('state') == 'playing') {           if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){               player.pauseCamera();           }           else{               player.pause();           }       }       else {           players.splice(i, 1);       }   }   return players; },
  "getKey": function(key){    return window[key]; },
  "setMainMediaByIndex": function(index){    if(index >= 0 && index < this.mainPlayList.get('items').length){       this.mainPlayList.set('selectedIndex', index);   } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){    var enabled = this.get(playerFlag);   for(var i in components){       components[i].set('visible', enabled);   } },
  "resumeGlobalAudios": function(caller){    if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller)       return;   window.currentGlobalAudiosActionCaller = undefined;   var audios = window.currentGlobalAudios;   if(!audios) return;   for(var audio in audios){       audios[audio].play();   } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){    var self = this;   var stateChangeFunction = function(event){       if(event.data.state == 'stopped'){           dispose();       }   };   var changeFunction = function(){       var index = playListDispatcher.get('selectedIndex');       if(index != -1){           indexDispatcher = index;           dispose();       }   };   var dispose = function(){       if(!playListDispatcher) return;       playList.set('selectedIndex', -1);       if(panoramaSequence && panoramaSequenceIndex != -1){           if(panoramaSequence) {               if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){                   var initialPosition = camera.get('initialPosition');                   var oldYaw = initialPosition.get('yaw');                   var oldPitch = initialPosition.get('pitch');                   var oldHfov = initialPosition.get('hfov');                   var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1];                   initialPosition.set('yaw', previousMovement.get('targetYaw'));                   initialPosition.set('pitch', previousMovement.get('targetPitch'));                   initialPosition.set('hfov', previousMovement.get('targetHfov'));                   var restoreInitialPositionFunction = function(event){                       initialPosition.set('yaw', oldYaw);                       initialPosition.set('pitch', oldPitch);                       initialPosition.set('hfov', oldHfov);                       itemDispatcher.unbind('end', restoreInitialPositionFunction, self);                   };                   itemDispatcher.bind('end', restoreInitialPositionFunction, self);               }               panoramaSequence.set('movementIndex', panoramaSequenceIndex);           }       }       playListDispatcher.set('selectedIndex', indexDispatcher);       if(player){           player.unbind('stateChange', stateChangeFunction, self);       }       if(sameViewerArea){           if(playList != playListDispatcher)               playListDispatcher.unbind('change', changeFunction, self);       }       else{           viewerArea.set('visible', false);       }       playListDispatcher = undefined;   };   if(!mediaDispatcher){       var currentIndex = playList.get('selectedIndex');       var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer);       if(currentPlayer) {           var playerClass = currentPlayer.get('class');           if(playerClass == 'PanoramaPlayer') mediaDispatcher = currentPlayer.get('panorama');           else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video');           else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum');           else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map');       }   }   var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined;   if(!playListDispatcher){       playList.set('selectedIndex', index);       return;   }   var indexDispatcher = playListDispatcher.get('selectedIndex');   if(playList.get('selectedIndex') == index || indexDispatcher == -1){       return;   }   var item = playList.get('items')[index];   var itemDispatcher = playListDispatcher.get('items')[indexDispatcher];   var viewerArea = item.get('player').get('viewerArea');   var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea');   if(sameViewerArea){       if(playList != playListDispatcher){           playListDispatcher.set('selectedIndex', -1);           playListDispatcher.bind('change', changeFunction, this);       }   }   else{       viewerArea.set('visible', true);   }   var panoramaSequenceIndex = -1;   var panoramaSequence = undefined;   var camera = itemDispatcher.get('camera');   if(camera){       panoramaSequence = camera.get('initialSequence');       if(panoramaSequence) {           panoramaSequenceIndex = panoramaSequence.get('movementIndex');       }   }   playList.set('selectedIndex', index);   var player = undefined;   if(item.get('player') != itemDispatcher.get('player')){       player = item.get('player');       player.bind('stateChange', stateChangeFunction, this);   }   this.executeFunctionWhenChange(playList, index, dispose); },
  "fixTogglePlayPauseButton": function(player){    var state = player.get('state');   var button = player.get('buttonPlayPause');   if(typeof button !== 'undefined' && player.get('state') == 'playing'){       button.set('pressed', true);   } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){    this.unregisterKey('visibility_'+component.get('id'));   var changeVisibility = function(){        if(effect && propertyEffect){            component.set(propertyEffect, effect);        }        component.set('visible', visible);       if(component.get('class') == 'ViewerArea'){           try{               if(visible) component.restart();               else        component.pause();           }           catch(e){};       }   };   var effectTimeoutName = 'effectTimeout_'+component.get('id');   if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){       var effectTimeout = window[effectTimeoutName];       if(effectTimeout instanceof Array){           for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) }       }else{           clearTimeout(effectTimeout);       }       delete window[effectTimeoutName];   }   else if(visible == component.get('visible') && !ignoreClearTimeout)       return;   if(applyAt && applyAt > 0){       var effectTimeout = setTimeout(function(){            if(window[effectTimeoutName] instanceof Array) {                var arrayTimeoutVal = window[effectTimeoutName];               var index = arrayTimeoutVal.indexOf(effectTimeout);               arrayTimeoutVal.splice(index, 1);               if(arrayTimeoutVal.length == 0){                   delete window[effectTimeoutName];               }           }else{               delete window[effectTimeoutName];            }           changeVisibility();        }, applyAt);       if(window.hasOwnProperty(effectTimeoutName)){           window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout];       }else{           window[effectTimeoutName] = effectTimeout;       }   }   else{       changeVisibility();   } },
  "shareFacebook": function(url){    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){    for(var i = 0; i<players.length; ++i){       var player = players[i];       if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){           player.resumeCamera();       }       else{           player.play();       }   } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){    var setVisibility = function(visible){       for(var i = 0, length = components.length; i<length; i++){           components[i].set('visible', visible);       }   };   if (this.rootPlayer.touchEnabled){       setVisibility(true);   } else {       var timeoutID = -1;       var rollOverFunction = function(){           setVisibility(true);           if(timeoutID >= 0) clearTimeout(timeoutID);           parentComponent.unbind('rollOver', rollOverFunction, this);           parentComponent.bind('rollOut', rollOutFunction, this);       };       var rollOutFunction = function(){           var timeoutFunction = function(){               setVisibility(false);               parentComponent.unbind('rollOver', rollOverFunction, this);           };           parentComponent.unbind('rollOut', rollOutFunction, this);           parentComponent.bind('rollOver', rollOverFunction, this);           timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut);       };       parentComponent.bind('rollOver', rollOverFunction, this);   } },
  "loadFromCurrentMediaPlayList": function(playList, delta){    var currentIndex = playList.get('selectedIndex');   var totalItems = playList.get('items').length;   var newIndex = (currentIndex + delta) % totalItems;   while(newIndex < 0){       newIndex = totalItems + newIndex;   };   if(currentIndex != newIndex){       playList.set('selectedIndex', newIndex);   }; },
  "autotriggerAtStart": function(player, callback){    var stateChangeFunction = function(event){        if(event.data.state == 'playing'){           callback();           player.unbind('stateChange', stateChangeFunction, this);       }   };   player.bind('stateChange', stateChangeFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){    var self = this;   var showEndFunction = function() {       popupPanoramaOverlay.unbind('showEnd', showEndFunction);       closeButton.bind('click', hideFunction, this);       setCloseButtonPosition();       closeButton.set('visible', true);   };   var endFunction = function() {       if(!popupPanoramaOverlay.get('loop'))           hideFunction();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       if(!self.isCardboardViewMode())           popupPanoramaOverlay.set('visible', false);       closeButton.set('visible', false);       closeButton.unbind('click', hideFunction, this);       popupPanoramaOverlay.unbind('end', endFunction, self);       self.resumePlayers(playersPaused, true);       self.resumeGlobalAudios();   };   var setCloseButtonPosition = function() {       var right = 10;       var top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   this.MainViewer.set('toolTipEnabled', false);   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(true);   this.pauseGlobalAudios();   popupPanoramaOverlay.bind('end', endFunction, this, true);   popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true);   popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){    var players = this.getByClassName('PanoramaPlayer');   return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios != undefined && audio.get('id') in audios){       audio = audios[audio.get('id')];   }   return audio; },
  "stopGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];       delete audios[audio.get('id')];   }   audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){    var closeFunction = function(){       clearAutoClose();       this.resumePlayers(playersPaused, !containsAudio);       w.unbind('close', closeFunction, this);   };   var clearAutoClose = function(){       w.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var timeoutID = undefined;   if(autoCloseMilliSeconds){       var autoCloseFunction = function(){           w.hide();       };       w.bind('click', clearAutoClose, this);       timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);   }   var playersPaused = this.pauseCurrentPlayers(!containsAudio);   w.bind('close', closeFunction, this);   w.show(this, true); },
  "loopAlbum": function(playList, index){    var playListItem = playList.get('items')[index];   var player = playListItem.get('player');   var loopFunction = function(){       player.play();   };   this.executeFunctionWhenChange(playList, index, loopFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){    var changeFunction = function(event){       if(event.data.previousSelectedIndex == index){           this.stopGlobalAudio(audio);           if(isPanorama) {               var media = playListItem.get('media');               var audios = media.get('audios');               audios.splice(audios.indexOf(audio), 1);               media.set('audios', audios);           }           playList.unbind('change', changeFunction, this);           if(endCallback)               endCallback();       }   };   var audios = window.currentGlobalAudios;   if(audios && audio.get('id') in audios){       audio = audios[audio.get('id')];       if(audio.get('state') != 'playing'){           audio.play();       }       return;   }   playList.bind('change', changeFunction, this);   var playListItem = playList.get('items')[index];   var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem';   if(isPanorama) {       var media = playListItem.get('media');       var audios = (media.get('audios') || []).slice();       if(audio.get('class') == 'MediaAudio') {           var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio');           panoramaAudio.set('autoplay', false);           panoramaAudio.set('audio', audio.get('audio'));           panoramaAudio.set('loop', audio.get('loop'));           panoramaAudio.set('id', audio.get('id'));           audio = panoramaAudio;       }       audios.push(audio);       media.set('audios', audios);   }   this.playGlobalAudio(audio, endCallback); },
  "existsKey": function(key){    return key in window; },
  "getActivePlayerWithViewer": function(viewerArea){    var players = this.getByClassName('PanoramaPlayer');   players = players.concat(this.getByClassName('VideoPlayer'));   players = players.concat(this.getByClassName('Video360Player'));   players = players.concat(this.getByClassName('PhotoAlbumPlayer'));   players = players.concat(this.getByClassName('MapPlayer'));   var i = players.length;   while(i-- > 0){       var player = players[i];       if(player.get('viewerArea') == viewerArea) {           var playerClass = player.get('class');           if(playerClass == 'PanoramaPlayer' && player.get('panorama') != undefined) return player;           else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player;           else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player;           else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player;       }   }   return undefined; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){    var changeFunction = function(){       var index = playList.get('selectedIndex');       if(index >= 0){           var beginFunction = function(){               playListItem.unbind('begin', beginFunction);               setMediaLabel(index);           };           var setMediaLabel = function(index){               var media = playListItem.get('media');               var text = media.get('data');               if(!text)                   text = media.get('label');               setHtml(text);           };           var setHtml = function(text){               if(text !== undefined)                   htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>');               else                   htmlText.set('html', '');           };           var playListItem = playList.get('items')[index];           if(htmlText.get('html')){               setHtml('Loading...');               playListItem.bind('begin', beginFunction);           }           else{               setMediaLabel(index);           }       }   };   var disposeFunction = function(){       htmlText.set('html', undefined);       playList.unbind('change', changeFunction, this);       playListItemStopToDispose.unbind('stop', disposeFunction, this);   };   if(playListItemStopToDispose){       playListItemStopToDispose.bind('stop', disposeFunction, this);   }   playList.bind('change', changeFunction, this);   changeFunction(); },
  "setMainMediaByName": function(name){    var items = this.mainPlayList.get('items');   for(var i = 0; i<items.length; ++i){       if(items[i].get('media').get('label') == name) {           this.mainPlayList.set('selectedIndex', i);           return;       }   } },
  "syncPlaylists": function(playLists){    var changeToMedia = function(media, playListDispatched){       for(var i = 0, count = playLists.length; i<count; ++i){           var playList = playLists[i];           if(playList != playListDispatched){               var items = playList.get('items');               for(var j = 0, countJ = items.length; j<countJ; ++j){                   if(items[j].get('media') == media){                       if(playList.get('selectedIndex') != j){                           playList.set('selectedIndex', j);                       }                       break;                   }               }           }       }   };   var changeFunction = function(event){       var playListDispatched = event.source;       var selectedIndex = playListDispatched.get('selectedIndex');       if(selectedIndex < 0)           return;       var media = playListDispatched.get('items')[selectedIndex].get('media');       changeToMedia(media, playListDispatched);   };   var mapPlayerChangeFunction = function(event){       var panoramaMapLocation = event.source.get('panoramaMapLocation');       if(panoramaMapLocation){           var map = panoramaMapLocation.get('map');           changeToMedia(map);       }   };   for(var i = 0, count = playLists.length; i<count; ++i){       playLists[i].bind('change', changeFunction, this);   }   var mapPlayers = this.getByClassName('MapPlayer');   for(var i = 0, count = mapPlayers.length; i<count; ++i){       mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this);   } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){    var self = this;   var closed = false;   var playerClickFunction = function() {       zoomImage.unbind('loaded', loadedFunction, self);       hideFunction();   };   var clearAutoClose = function(){       zoomImage.unbind('click', clearAutoClose, this);       if(timeoutID != undefined){           clearTimeout(timeoutID);       }   };   var loadedFunction = function(){       self.unbind('click', playerClickFunction, self);       veil.set('visible', true);       setCloseButtonPosition();       closeButton.set('visible', true);       zoomImage.unbind('loaded', loadedFunction, this);       zoomImage.bind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this);       timeoutID = setTimeout(timeoutFunction, 200);   };   var timeoutFunction = function(){       timeoutID = undefined;       if(autoCloseMilliSeconds){           var autoCloseFunction = function(){               hideFunction();           };           zoomImage.bind('click', clearAutoClose, this);           timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds);       }       zoomImage.bind('backgroundClick', hideFunction, this);       if(toggleImage) {           zoomImage.bind('click', toggleFunction, this);           zoomImage.set('imageCursor', 'hand');       }       closeButton.bind('click', hideFunction, this);       if(loadedCallback)           loadedCallback();   };   var hideFunction = function() {       self.MainViewer.set('toolTipEnabled', true);       closed = true;       if(timeoutID)           clearTimeout(timeoutID);       if(autoCloseMilliSeconds)           clearAutoClose();       if(hideCallback)           hideCallback();       zoomImage.set('visible', false);       if(hideEffect && hideEffect.get('duration') > 0){           hideEffect.bind('end', endEffectFunction, this);       }       else{           zoomImage.set('image', null);       }       closeButton.set('visible', false);       veil.set('visible', false);       self.unbind('click', playerClickFunction, self);       zoomImage.unbind('backgroundClick', hideFunction, this);       zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this);       zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true);       if(toggleImage) {           zoomImage.unbind('click', toggleFunction, this);           zoomImage.set('cursor', 'default');       }       closeButton.unbind('click', hideFunction, this);       self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio);       if(audio){           if(stopBackgroundAudio){               self.resumeGlobalAudios();           }           self.stopGlobalAudio(audio);       }   };   var endEffectFunction = function() {       zoomImage.set('image', null);       hideEffect.unbind('end', endEffectFunction, this);   };   var toggleFunction = function() {       zoomImage.set('image', isToggleVisible() ? image : toggleImage);   };   var isToggleVisible = function() {       return zoomImage.get('image') == toggleImage;   };   var setCloseButtonPosition = function() {       var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10;       var top = zoomImage.get('imageTop') + 10;       if(right < 10) right = 10;       if(top < 10) top = 10;       closeButton.set('right', right);       closeButton.set('top', top);   };   var userInteractionStartFunction = function() {       if(timeoutUserInteractionID){           clearTimeout(timeoutUserInteractionID);           timeoutUserInteractionID = undefined;       }       else{           closeButton.set('visible', false);       }   };   var userInteractionEndFunction = function() {       if(!closed){           timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300);       }   };   var userInteractionTimeoutFunction = function() {       timeoutUserInteractionID = undefined;       closeButton.set('visible', true);       setCloseButtonPosition();   };   this.MainViewer.set('toolTipEnabled', false);   var veil = this.veilPopupPanorama;   var zoomImage = this.zoomImagePopupPanorama;   var closeButton = this.closeButtonPopupPanorama;   if(closeButtonProperties){       for(var key in closeButtonProperties){           closeButton.set(key, closeButtonProperties[key]);       }   }   var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio);   if(audio){       if(stopBackgroundAudio){           this.pauseGlobalAudios();       }       this.playGlobalAudio(audio);   }   var timeoutID = undefined;   var timeoutUserInteractionID = undefined;   zoomImage.bind('loaded', loadedFunction, this);   setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0);   zoomImage.set('image', image);   zoomImage.set('customWidth', customWidth);   zoomImage.set('customHeight', customHeight);   zoomImage.set('showEffect', showEffect);   zoomImage.set('hideEffect', hideEffect);   zoomImage.set('visible', true);   return zoomImage; },
  "startPanoramaWithCamera": function(panorama, camera){    var playLists = this.getByClassName('PlayList');   if(playLists.length == 0)       return;    var restoreItems = [];   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           var item = items[j];           if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){               restoreItems.push({camera: item.get('camera'), item: item});               item.set('camera', camera);           }       }   }   if(restoreItems.length > 0) {       var restoreCameraOnStop = function(){           for (var i = 0; i < restoreItems.length; i++) {               restoreItems[i].item.set('camera', restoreItems[i].camera);           }           restoreItems[0].item.unbind('stop', restoreCameraOnStop, this);       };       restoreItems[0].item.bind('stop', restoreCameraOnStop, this);   } },
  "shareTwitter": function(url){    window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){    var audios = window.currentGlobalAudios;   if(audios){       audio = audios[audio.get('id')];   }   audio.pause(); },
  "getPlayListWithMedia": function(media, onlySelected){    var playLists = this.getByClassName('PlayList');   for(var i = 0, count = playLists.length; i<count; ++i){       var playList = playLists[i];       if(onlySelected && playList.get('selectedIndex') == -1)           continue;       var items = playList.get('items');       for(var j = 0, countJ = items.length; j<countJ; ++j){           if(items[j].get('media') == media)               return playList;       }   }   return undefined; },
  "unregisterKey": function(key){    delete window[key]; }
 },
 "paddingLeft": 0,
 "borderRadius": 0,
 "contentOpaque": false,
 "id": "rootPlayer",
 "verticalAlign": "top",
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "shadow": false,
 "minWidth": 20,
 "class": "Player",
 "mouseWheelEnabled": true,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "paddingBottom": 0,
 "overflow": "visible",
 "width": "100%",
 "backgroundPreloadEnabled": true,
 "horizontalAlign": "left",
 "paddingRight": 0
})