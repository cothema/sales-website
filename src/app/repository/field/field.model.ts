import { PartnerModel } from '../partner/partner.model';

export interface FieldModel {
  id: string;
  urlAlias: string;
  title_: string;
  description_: string;
  color?: string;
  icon?: any;
  tags?: string[];
  partners?: PartnerModel[];
}
