
# aamvajs

  

Parse Pdf417 barcode data from US and Canada driver licenses. AAMVA [specification](https://www.aamva.org/getmedia/99ac7057-0f4d-4461-b0a2-3a5532e1b35c/AAMVA-2020-DLID-Card-Design-Standard.pdf)

  
  

## Installation

  

```bash
npm i aamvajs
```

or

```bash
yarn add aamvajs
```

  

## Usage

  

```javascript
const AAMVA = require('aamvajs');
const rawDocument = `@

ANSI 636010090002DL00410249ZF02900058DLDAQS123456579010
DCSSAMPLE
DDEU
DACNICK
DDFU
DADNONE
DDGU
DCAE
DCBNONE
DCDNONE
DBD07272016
DBB01121957
DBA01122024
DBC1
DAU070 IN
DAG123 MAIN STREET
DAITALLAHASSEE
DAJFL
DAK000001234  
DCFQ931611290000
DCGUSA
DCK0110009295000261
DDAF
DDB05012019

ZFZFA
ZFB
ZFCSAFE DRIVER
ZFD
ZFE
ZFF
ZFG
ZFH
ZFI
ZFJ
ZFK

`;


const document = AAMVA.raw(rawDocument);

// or

// const base64RawDocument = 'QAoeCkFOU0kgNjM2MDEwMDkwMDAyREwwMDQxMDI0OVpGMDI5MDAwNThETERBUVMxMjM0NTY1NzkwMTAKRENTU0FNUExFCkRERVUKREFDTklDSwpEREZVCkRBRE5PTkUKRERHVQpEQ0FFCkRDQk5PTkUKRENETk9ORQpEQkQwNzI3MjAxNgpEQkIwMTEyMTk1NwpEQkEwMTEyMjAyNApEQkMxCkRBVTA3MCBJTgpEQUcxMjMgTUFJTiBTVFJFRVQKREFJVEFMTEFIQVNTRUUKREFKRkwKREFLMDAwMDAxMjM0ICAKRENGUTkzMTYxMTI5MDAwMApEQ0dVU0EKRENLMDExMDAwOTI5NTAwMDI2MQpEREFGCkREQjA1MDEyMDE5CgpaRlpGQQpaRkIKWkZDU0FGRSBEUklWRVIKWkZEClpGRQpaRkYKWkZHClpGSApaRkkKWkZKClpGSwoK';

// const document = AAMVA.base64(base64RawDocument);

console.log(JSON.stringify(document, null, ' '));
```

***

**Output:**

```json
{
 "header": {
  "separator": "\n",
  "terminator": "\n",
  "fileType": "ANSI",
  "iin": "636010",
  "version": 9,
  "jurisdictionVersion": 0,
  "numberOfEntries": 2
 },
 "subfiles": [
  {
   "type": "DL",
   "offset": 41,
   "length": 249,
   "data": [
    "DAQS123456579010",
    "DCSSAMPLE",
    "DDEU",
    "DACNICK",
    "DDFU",
    "DADNONE",
    "DDGU",
    "DCAE",
    "DCBNONE",
    "DCDNONE",
    "DBD07272016",
    "DBB01121957",
    "DBA01122024",
    "DBC1",
    "DAU070 IN",
    "DAG123 MAIN STREET",
    "DAITALLAHASSEE",
    "DAJFL",
    "DAK000001234  ",
    "DCFQ931611290000",
    "DCGUSA",
    "DCK0110009295000261",
    "DDAF",
    "DDB05012019"
   ]
  },
  {
   "type": "ZF",
   "offset": 290,
   "length": 58,
   "data": [
    "ZFA",
    "ZFB",
    "ZFCSAFE DRIVER",
    "ZFD",
    "ZFE",
    "ZFF",
    "ZFG",
    "ZFH",
    "ZFI",
    "ZFJ",
    "ZFK"
   ]
  }
 ],
 "data": {
  "localFields": {
   "specialRestrictions": "",
   "safeDriverIndicator": "SAFE DRIVER",
   "sexualPredator": "",
   "sexOffenderStatute": "",
   "insulinDependent": "",
   "developmentalDisability": "",
   "hearingImpaired": "",
   "fishAndWildlifeDesignations": "",
   "customerNumber": ""
  },
  "idNumber": "S123456579010",
  "familyName": "SAMPLE",
  "familyNameTruncation": "U",
  "firstName": "NICK",
  "firstNameTruncation": "U",
  "middleName": "NONE",
  "middleNameTruncation": "U",
  "vehicleClass": "E",
  "restrictionCodes": "NONE",
  "endorsementCodes": "NONE",
  "issueDate": "2016-07-27",
  "dateOfBirth": "1957-01-12",
  "expirationDate": "2024-01-12",
  "sex": "M",
  "height": "070 IN",
  "address": "123 MAIN STREET",
  "city": "TALLAHASSEE",
  "state": "FL",
  "zip": "000001234",
  "discriminator": "Q931611290000",
  "country": "USA",
  "inventoryControlNumber": "0110009295000261",
  "complianceType": "F",
  "cardRevisionDate": "2019-05-01"
 }
}
```
