# TableToCsv
creating  a csv file using ngcsv directive

We need ngcsv directive, for this please download from 

https://github.com/asafdav/ng-csv

We have three Objects namely , 1: DatalableObjects, 2: datakeys, 3 Objects.

datakeys is used as a filter to get properties from objects.

We generate HeaderArray from DatalabelObjects and contentarray from datakeys and objects by using the belwo code,


ngcsv using below format,

  //ng-csv header array format is $scope.headarr=["name","place","animal"];
//ng-csv content array format is $scope.getArray=[["dinesh","ameerpet","lion"],["ganesh","koti","elephant"],["ramesh","balakampet","tiger"]];

to get these formats we use the logic below,


copy this logic in the controller and it will work,

'use strict'

angular.module('TableToCsvApp.controllers',[])
.controller('TableToCsvController', function ($scope) {
    
$scope.datalabelobjects  = [
    {
      "case_number": " Type /Case Number / Year",
      "$$hashKey": "object:292"
    },
    {
      "case_stage": "Stage",
      "$$hashKey": "object:293"
    },
    {
      "next_action_date": "Next Action Date",
      "$$hashKey": "object:294"
    },
    {
      "clients": "Clients",
      "$$hashKey": "object:295"
    },
    {
      "court_name": "Court Name",
      "$$hashKey": "object:296"
    }
  ];

$scope.datakeys = [
    "case_number",
    "case_stage",
    "next_action_date",
    "name",
    "court_name"
  ];

  $scope.objects = [
    {
      "case_status": "PENDING",
      "case_stage": "Summons",
      "case_type": "Criminal",
      "case_subtype": "Appl.33(2)b",
      "court_type": null,
      "court_name": "ACMM/CMM",
      "court_bench": null,
      "court_complex": null,
      "case_number": "Appl.33(2)b / 3234/17 / 2017",
      "case_number_year": "2017",
      "next_action_date": "2017/11/02",
      "state": null,
      "district": null,
      "disposed_details": {},
      "transferred_details": {},
      "starred_by": [],
      "side": null,
      "state_code": null,
      "district_code": null,
      "court_complex_code": null,
      "court_name_code": null,
      "court_bench_code": null,
      "side_code": null,
      "in_synch_with_court_data": false,
      "id": "59f45860fef3690b3b00001c",
      "owner": {
        "name": "shree-PA",
        "id": "58f7980de3fa8a3f4c00000d",
        "contact_cell_number": "9448871438",
        "type_of_user": "PA"
      },
      "clients": [
        {
          "id": "5854e8d2e3fa8a06b1000035",
          "name": "client-sa",
          "user_code": null,
          "contact_cell_number": "7788766554"
        }
      ],
      "$$hashKey": "object:334"
    },  
    {
      "case_status": "PENDING",
      "case_stage": "Preliminary Hearing",
      "case_type": "Civil",
      "case_subtype": "A.S.",
      "court_type": null,
      "court_name": "Senior civil judge and CJM",
      "court_bench": null,
      "court_complex": null,
      "case_number": "A.S. / jhgjgh / 2013",
      "case_number_year": "2013",
      "next_action_date": null,
      "state": null,
      "district": "",
      "disposed_details": {},
      "transferred_details": {},
      "starred_by": [],
      "side": null,
      "state_code": null,
      "district_code": null,
      "court_complex_code": null,
      "court_name_code": null,
      "court_bench_code": null,
      "side_code": null,
      "in_synch_with_court_data": false,
      "id": "58e721c5e3fa8a7ead000070",
      "owner": {
        "name": "shreeshaPA",
        "id": "57a5bcb2e3fa8a558900009f",
        "contact_cell_number": "9448871438",
        "type_of_user": "PA"
      },
      "clients": [
        {
          "id": "5854e742e3fa8a06b1000019",
          "name": "sindhu",
          "user_code": null,
          "contact_cell_number": "9448871438"
        }
      ],
      "$$hashKey": "object:340"
    }
  ];

  $scope.HeaderArray= []; 
  //ng-csv header array format is $scope.headarr=["name","place","animal"];
  angular.forEach($scope.datalabelobjects, function (value, key) {
     var innerObj = value;
     for(key in innerObj){
      if(innerObj.hasOwnProperty(key)){
          $scope.HeaderArray.push(innerObj[key]);
          break;
      }}});
  //ng-csv content array format is $scope.getArray=[["dinesh","ameerpet","lion"],["ganesh","koti","elephant"],["ramesh","balakampet","tiger"]];
  $scope.contentArray = [];  
  angular.forEach($scope.objects, function (value, key) {      
      var innerObj = value;
      var contentInnerArray = [];      
      for(key in innerObj){       
          if(Array.isArray(innerObj[key])){           
              if(innerObj[key][0] !== undefined){
              var ObjToAdd = {};                
             ObjToAdd=innerObj[key][0];
             for(key in ObjToAdd){
              innerObj[key] = ObjToAdd[key];            
              } } }  }  
      for(var i=0; i<=$scope.datakeys.length-1;i++){
          contentInnerArray.push(innerObj[$scope.datakeys[i]]);}
           $scope.contentArray.push(contentInnerArray);
      });  
});


Once we get the contentArray and headerArray in the below format,

  //ng-csv content array format is $scope.getArray=[["dinesh","ameerpet","lion"],["ganesh","koti","elephant"],["ramesh","balakampet","tiger"]];
  
  then we can use below code, to pass the values to ngcsv directive,
  
  <div ng-controller="TableToCsvController">
        <button type="button" ng-csv="contentArray" csv-header="HeaderArray" filename="Download.csv">Export</button>
</div>



Once the user clicks export a csv file will be downloaded.


in the app folder go to address bar, type cmd and click enter.
type command : node scripts/web-server.js

