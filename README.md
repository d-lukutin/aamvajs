
# aamvajs

  

AAMVA [specification](https://www.aamva.org/getmedia/99ac7057-0f4d-4461-b0a2-3a5532e1b35c/AAMVA-2020-DLID-Card-Design-Standard.pdf)

  
  

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

const base64RawDocument = 'QAoeDUFOU0kgNjM2MDMzMDkwMDAxREwwMDMxMDI3OURMREFRNTE5NDMxNwpEQ1NMVUtVVElOCkRERU4KREFDRE1JVFJZCkRERk4KREFETklLT0xBRVZJQ0gKRERHTgpEQ0FECkRDQk5PTkUKRENETk9ORQpEQkExMTEwMjAyNQpEQkQyMDI1LTA4LTE0CkRCQjA4MTQyMDAwCkRCQzEKREFZQkxLCkRBWkJBTApEQVUwNzAgaW4KREFHMTE2NDUgSkFWQSBTVApEQUlDWVBSRVNTCkRBSkFMCkRBSzIyMDEyODA5MSAgCkRDR1VTQQpEQ0ZWRDk5NTkxOEExNDM4SgpEQ0pZVDY2NjM3MlA5NzI3QQpEQ0tHWDE5MTgzN1M5ODQxRApEREFGCkREQjExMjcyMDE2DQ==';

const document = AAMVA.raw(Buffer.from(base64RawDocument, 'base64').toString());

// or
// const document = AAMVA.base64(base64RawDocument); 

console.log(document);
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
