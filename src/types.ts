export interface EmojiListItem {
	name: string;
	unified: string;
	non_qualified?: string;
	docomo?: string;
	au?: string;
	softbank?: string;
	google?: string;
	image: string;
	sheet_x: number;
	sheet_y: number;
	short_name: string;
	short_names: string[];
	text?: string;
	texts?: string[];
	category: string;
	subcategory: string;
	sort_order: number;
	added_in: string;
	has_img_apple: boolean;
	has_img_google: boolean;
	has_img_twitter: boolean;
	has_img_facebook: boolean;
	skin_variations?: SkinVariations;
	obsoletes?: string;
	obsoleted_by?: string;
}

export interface SkinVariations {
	'1F3FB'?: SkinVariantWithObseletes;
	'1F3FC'?: SkinVariantWithObseletes;
	'1F3FD'?: SkinVariantWithObseletes;
	'1F3FE'?: SkinVariantWithObseletes;
	'1F3FF'?: SkinVariantWithObseletes;
	'1F3FB-1F3FB'?: BaseSkinVariant;
	'1F3FB-1F3FC'?: BaseSkinVariant;
	'1F3FB-1F3FD'?: BaseSkinVariant;
	'1F3FB-1F3FE'?: BaseSkinVariant;
	'1F3FB-1F3FF'?: BaseSkinVariant;
	'1F3FC-1F3FB'?: BaseSkinVariant;
	'1F3FC-1F3FC'?: BaseSkinVariant;
	'1F3FC-1F3FD'?: BaseSkinVariant;
	'1F3FC-1F3FE'?: BaseSkinVariant;
	'1F3FC-1F3FF'?: BaseSkinVariant;
	'1F3FD-1F3FB'?: BaseSkinVariant;
	'1F3FD-1F3FC'?: BaseSkinVariant;
	'1F3FD-1F3FD'?: BaseSkinVariant;
	'1F3FD-1F3FE'?: BaseSkinVariant;
	'1F3FD-1F3FF'?: BaseSkinVariant;
	'1F3FE-1F3FB'?: BaseSkinVariant;
	'1F3FE-1F3FC'?: BaseSkinVariant;
	'1F3FE-1F3FD'?: BaseSkinVariant;
	'1F3FE-1F3FE'?: BaseSkinVariant;
	'1F3FE-1F3FF'?: BaseSkinVariant;
	'1F3FF-1F3FB'?: BaseSkinVariant;
	'1F3FF-1F3FC'?: BaseSkinVariant;
	'1F3FF-1F3FD'?: BaseSkinVariant;
	'1F3FF-1F3FE'?: BaseSkinVariant;
	'1F3FF-1F3FF'?: BaseSkinVariant;
}

export interface SkinVariantObseletes {
	obsoleted_by?: string;
	obsoletes?: string;
}

export interface BaseSkinVariant {
	unified: string;
	non_qualified?: string;
	image: string;
	sheet_x: number;
	sheet_y: number;
	added_in: string;
	has_img_apple: boolean;
	has_img_google: boolean;
	has_img_twitter: boolean;
	has_img_facebook: boolean;
}

export type SkinVariantWithObseletes = BaseSkinVariant & SkinVariantObseletes;
