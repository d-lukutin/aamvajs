
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
		"terminator": "\r",
		"fileType": "ANSI",
		"iin": "636033",
		"version": 9,
		"jurisdictionVersion": 0,
		"numberOfEntries": 1
	},
	"subfiles": [{
		"type": "DL",
		"offset": 31,
		"length": 279,
		"data": [
			"DAQ5194317",
			"DCSLUKUTIN",
			"DDEN",
			"DACDMITRY",
			"DDFN",
			"DADNIKOLAEVICH",
			"DDGN",
			"DCAD",
			"DCBNONE",
			"DCDNONE",
			"DBA11102025",
			"DBD2025-08-14",
			"DBB08142000",
			"DBC1",
			"DAYBLK",
			"DAZBAL",
			"DAU070 in",
			"DAG11645 JAVA ST",
			"DAICYPRESS",
			"DAJAL",
			"DAK220128091 ",
			"DCGUSA",
			"DCFVD995918A1438J",
			"DCJYT666372P9727A",
			"DCKGX191837S9841D",
			"DDAF",
			"DDB11272016"
		]}
	],
	"data": {
		"idNumber": "5194317",
		"familyName": "LUKUTIN",
		"familyNameTruncation": "N",
		"firstName": "DMITRY",
		"firstNameTruncation": "N",
		"middleName": "NIKOLAEVICH",
		"middleNameTruncation": "N",
		"vehicleClass": "D",
		"restrictionCodes": "NONE",
		"endorsementCodes": "NONE",
		"expirationDate": "2025-11-10",
		"issueDate": "2025-08-14",
		"dateOfBirth": "2000-08-14",
		"sex": "M",
		"eyeColor": "BLK",
		"hairColor": "BAL",
		"height": "070 in",
		"address": "11645 JAVA ST",
		"city": "CYPRESS",
		"state": "AL",
		"zip": "220128091",
		"country": "USA",
		"discriminator": "VD995918A1438J",
		"auditInformation": "YT666372P9727A",
		"inventoryControlNumber": "GX191837S9841D",
		"complianceType": "F",
		"cardRevisionDate": "2016-11-27"
	}
}
```
