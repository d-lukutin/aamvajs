import { ISubfile } from './subfile.interface';

export interface IDocument {
    readonly header: {
        readonly separator: string;
        readonly terminator: string;
        readonly fileType: string;
        readonly iin: string;
        readonly version: number;
        readonly jurisdictionVersion: number;
        readonly numberOfEntries: number;
    };
    readonly subfiles: ISubfile[];
    data: {
        readonly vehicleClass?: string;
        readonly restrictionCodes?: string;
        readonly endorsementCodes?: string;
        readonly expirationDate?: string;
        readonly familyName?: string;
        readonly firstName?: string;
        readonly middleName?: string;
        readonly issueDate?: string;
        readonly dateOfBirth?: string;
        readonly sex?: string;
        readonly eyeColor?: string;
        readonly height?: string;
        readonly address?: string;
        readonly city?: string;
        readonly state?: string;
        readonly zip?: string;
        readonly idNumber?: string;
        readonly discriminator?: string;
        readonly country?: string;
        readonly familyNameTruncation?: string;
        readonly firstNameTruncation?: string;
        readonly middleNameTruncation?: string;
        readonly address2?: string;
        readonly hairColor?: string;
        readonly placeOfBirth?: string;
        readonly auditInformation?: string;
        readonly inventoryControlNumber?: string;
        readonly otherFamilyName?: string;
        readonly otherGivenName?: string;
        readonly suffixName?: string;
        readonly nameSuffix?: string;
        readonly weightRange?: string;
        readonly race?: string;
        readonly federalCommercialVehicleCodes?: string;
        readonly standardVehicleClassification?: string;
        readonly standardEndorsementCode?: string;
        readonly standardRestrictionCode?: string;
        readonly vehicleClassificationDescription?: string;
        readonly endorsementCodeDescription?: string;
        readonly restrictionCodeDescription?: string;
        readonly complianceType?: string;
        readonly cardRevisionDate?: string;
        readonly hazmatEndorsementExpirationDate?: string;
        readonly limitedDurationDocumentIndicator?: string;
        readonly weightInPounds?: string;
        readonly weightInKilograms?: string;
        readonly under18Until?: string;
        readonly under19Until?: string;
        readonly under21Until?: string;
        readonly organDonorIndicator?: string;
        readonly veteranIndicator?: string;
        readonly fullName?: string[];
        readonly localFields?: {
            readonly fullName?: string[];
            readonly restriction?: string;
            readonly eyeColor?: string;
            readonly hairColor?: string;
            readonly replacedDate?: string;
            readonly specialRestrictions?: string;
            readonly safeDriverIndicator?: string;
            readonly sexualPredator?: string;
            readonly sexOffenderStatute?: string;
            readonly insulinDependent?: string;
            readonly developmentalDisability?: string;
            readonly hearingImpaired?: string;
            readonly fishAndWildlifeDesignations?: string;
            readonly customerNumber?: string;
            readonly idNumber?: string;
            readonly zca?: string;
        }
    }
}