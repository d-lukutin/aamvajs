import { IDataMatch } from './interfaces';
import {
    dateConverter,
    clearConverter,
    genderConverter,
    splitConverter
} from './converters';

export const dataMatchHeaders: IDataMatch = {
    DCA: { name: 'vehicleClass', converters: [clearConverter] },
    DCB: { name: 'restrictionCodes', converters: [clearConverter] },
    DCD: { name: 'endorsementCodes', converters: [clearConverter] },
    DBA: { name: 'expirationDate', converters: [clearConverter, dateConverter] },
    DAB: { name: 'familyName', converters: [clearConverter] },
    DCS: { name: 'familyName', converters: [clearConverter] },
    DCT: { name: 'firstName', converters: [clearConverter] },
    DAC: { name: 'firstName', converters: [clearConverter] },
    DAD: { name: 'middleName', converters: [clearConverter] },
    DBD: { name: 'issueDate', converters: [clearConverter, dateConverter] },
    DBB: { name: 'dateOfBirth', converters: [dateConverter] },
    DBC: { name: 'sex', converters: [clearConverter, genderConverter] },
    DAY: { name: 'eyeColor', converters: [clearConverter] },
    DAU: { name: 'height', converters: [clearConverter] },
    DAG: { name: 'address', converters: [clearConverter] },
    DAI: { name: 'city', converters: [clearConverter] },
    DAJ: { name: 'state', converters: [clearConverter] },
    DAK: { name: 'zip', converters: [clearConverter] },
    DBJ: { name: 'idNumber', converters: [clearConverter] },
    DAQ: { name: 'idNumber', converters: [clearConverter] },
    DCF: { name: 'discriminator', converters: [clearConverter] },
    DCG: { name: 'country', converters: [clearConverter] },
    DDE: { name: 'familyNameTruncation', converters: [clearConverter] },
    DDF: { name: 'firstNameTruncation', converters: [clearConverter] },
    DDG: { name: 'middleNameTruncation', converters: [clearConverter] },
    DAH: { name: 'address2', converters: [clearConverter] },
    DAZ: { name: 'hairColor', converters: [clearConverter] },
    DCI: { name: 'placeOfBirth', converters: [clearConverter] },
    DCJ: { name: 'auditInformation', converters: [clearConverter] },
    DCK: { name: 'inventoryControlNumber', converters: [clearConverter] },
    DBO: { name: 'otherFamilyName', converters: [clearConverter] },
    DBN: { name: 'otherFamilyName', converters: [clearConverter] },
    DBP: { name: 'otherGivenName', converters: [clearConverter] },
    DBG: { name: 'otherGivenName', converters: [clearConverter] },
    DBR: { name: 'suffixName', converters: [clearConverter] },
    DBS: { name: 'suffixName', converters: [clearConverter] },
    DCU: { name: 'nameSuffix', converters: [clearConverter] },
    DCE: { name: 'weightRange', converters: [clearConverter] },
    DCL: { name: 'race', converters: [clearConverter] },
    DCH: { name: 'federalCommercialVehicleCodes', converters: [clearConverter] },
    DCM: { name: 'standardVehicleClassification', converters: [clearConverter] },
    DCN: { name: 'standardEndorsementCode', converters: [clearConverter] },
    DCO: { name: 'standardRestrictionCode', converters: [clearConverter] },
    DCP: { name: 'vehicleClassificationDescription', converters: [clearConverter] },
    DCQ: { name: 'endorsementCodeDescription', converters: [clearConverter] },
    DCR: { name: 'restrictionCodeDescription', converters: [clearConverter] },
    DDA: { name: 'complianceType', converters: [clearConverter] },
    DDB: { name: 'cardRevisionDate', converters: [clearConverter, dateConverter] },
    DDC: { name: 'hazmatEndorsementExpirationDate', converters: [clearConverter, dateConverter] },
    DDD: { name: 'limitedDurationDocumentIndicator', converters: [clearConverter] },
    DAW: { name: 'weightInPounds', converters: [clearConverter] },
    DAX: { name: 'weightInKilograms', converters: [clearConverter] },
    DDH: { name: 'under18Until', converters: [clearConverter, dateConverter] },
    DDI: { name: 'under19Until', converters: [clearConverter, dateConverter] },
    DDJ: { name: 'under21Until', converters: [clearConverter, dateConverter] },
    DDK: { name: 'organDonorIndicator', converters: [clearConverter] },
    DDL: { name: 'veteranIndicator', converters: [clearConverter] },

    //New York
    ZNA: { name: 'fullName', isLocalField: true, converters: [clearConverter, splitConverter('@')] },

    // California
    ZCA: { name: 'eyeColor', nameByVersion: [{
        versions: [4],
        name: 'zca'
    }], isLocalField: true, converters: [clearConverter] },
    ZCB: { name: 'hairColor', nameByVersion: [{
        versions: [4],
        name: 'restriction'
    }], isLocalField: true, converters: [clearConverter] },
    ZCC: { name: 'eyeColor', isLocalField: true, converters: [clearConverter] },
    ZCD: { name: 'hairColor', isLocalField: true, converters: [clearConverter] },

    // Florida
    ZFA: { name: 'replacedDate', isLocalField: true, converters: [clearConverter, dateConverter] },
    ZFB: { name: 'specialRestrictions', isLocalField: true, converters: [clearConverter] },
    ZFC: { name: 'safeDriverIndicator', isLocalField: true, converters: [clearConverter] },
    ZFD: { name: 'sexualPredator', isLocalField: true, converters: [clearConverter] },
    ZFE: { name: 'sexOffenderStatute', isLocalField: true, converters: [clearConverter] },
    ZFF: { name: 'insulinDependent', isLocalField: true, converters: [clearConverter] },
    ZFG: { name: 'developmentalDisability', isLocalField: true, converters: [clearConverter] },
    ZFH: { name: 'hearingImpaired', isLocalField: true, converters: [clearConverter] },
    ZFI: { name: 'fishAndWildlifeDesignations', isLocalField: true, converters: [clearConverter] },
    ZFJ: { name: 'customerNumber', isLocalField: true, converters: [clearConverter] },

    // Ontario
    ZOA: { name: 'fullName', isLocalField: true, converters: [clearConverter, splitConverter(',')] },
    ZOZ: { name: 'idNumber', isLocalField: true, converters: [clearConverter] },
};