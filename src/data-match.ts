import { IDataMatch } from './interfaces';
import {
    dateConverter,
    clearConverter,
    genderConverter
} from './converters';

export const dataMatchHeaders: IDataMatch = {
    DCA: { name: 'vehicleClass' },
    DCB: { name: 'restrictionCodes' },
    DCD: { name: 'endorsementCodes' },
    DBA: { name: 'expirationDate', converter: dateConverter },
    DCS: { name: 'familyName' },
    DAC: { name: 'firstName' },
    DAD: { name: 'middleName' },
    DBD: { name: 'issueDate', converter: dateConverter },
    DBB: { name: 'dateOfBirth', converter: dateConverter },
    DBC: { name: 'sex', converter: genderConverter },
    DAY: { name: 'eyeColor' },
    DAU: { name: 'height' },
    DAG: { name: 'address' },
    DAI: { name: 'city' },
    DAJ: { name: 'state' },
    DAK: { name: 'zip', converter: clearConverter },
    DAQ: { name: 'idNumber' },
    DCF: { name: 'discriminator' },
    DCG: { name: 'country' },
    DDE: { name: 'familyNameTruncation' },
    DDF: { name: 'firstNameTruncation' },
    DDG: { name: 'middleNameTruncation' },
    DAH: { name: 'address2' },
    DAZ: { name: 'hairColor' },
    DCI: { name: 'placeOfBirth' },
    DCJ: { name: 'auditInformation' },
    DCK: { name: 'inventoryControlNumber' },
    DBN: { name: 'otherFamilyName' },
    DBG: { name: 'otherGivenName' },
    DBS: { name: 'suffixName' },
    DCU: { name: 'nameSuffix' },
    DCE: { name: 'weightRange' },
    DCL: { name: 'race' },
    DCM: { name: 'standardVehicleClassification' },
    DCN: { name: 'standardEndorsementCode' },
    DCO: { name: 'standardRestrictionCode' },
    DCP: { name: 'vehicleClassificationDescription' },
    DCQ: { name: 'endorsementCodeDescription' },
    DCR: { name: 'restrictionCodeDescription' },
    DDA: { name: 'complianceType' },
    DDB: { name: 'cardRevisionDate', converter: dateConverter },
    DDC: { name: 'hazmatEndorsementExpirationDate', converter: dateConverter },
    DDD: { name: 'limitedDurationDocumentIndicator' },
    DAW: { name: 'weightInPounds' },
    DAX: { name: 'weightInKilograms' },
    DDH: { name: 'under18Until', converter: dateConverter },
    DDI: { name: 'under19Until', converter: dateConverter },
    DDJ: { name: 'under21Until', converter: dateConverter },
    DDK: { name: 'organDonorIndicator' },
    DDL: { name: 'veteranIndicator' }
};