export interface Emoji {
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
	'1F3FB'?: N1F3Fb;
	'1F3FC'?: N1F3Fc;
	'1F3FD'?: N1F3Fd;
	'1F3FE'?: N1F3Fe;
	'1F3FF'?: N1F3Ff;
	'1F3FB-1F3FB'?: N1F3Fb1F3Fb;
	'1F3FB-1F3FC'?: N1F3Fb1F3Fc;
	'1F3FB-1F3FD'?: N1F3Fb1F3Fd;
	'1F3FB-1F3FE'?: N1F3Fb1F3Fe;
	'1F3FB-1F3FF'?: N1F3Fb1F3Ff;
	'1F3FC-1F3FB'?: N1F3Fc1F3Fb;
	'1F3FC-1F3FC'?: N1F3Fc1F3Fc;
	'1F3FC-1F3FD'?: N1F3Fc1F3Fd;
	'1F3FC-1F3FE'?: N1F3Fc1F3Fe;
	'1F3FC-1F3FF'?: N1F3Fc1F3Ff;
	'1F3FD-1F3FB'?: N1F3Fd1F3Fb;
	'1F3FD-1F3FC'?: N1F3Fd1F3Fc;
	'1F3FD-1F3FD'?: N1F3Fd1F3Fd;
	'1F3FD-1F3FE'?: N1F3Fd1F3Fe;
	'1F3FD-1F3FF'?: N1F3Fd1F3Ff;
	'1F3FE-1F3FB'?: N1F3Fe1F3Fb;
	'1F3FE-1F3FC'?: N1F3Fe1F3Fc;
	'1F3FE-1F3FD'?: N1F3Fe1F3Fd;
	'1F3FE-1F3FE'?: N1F3Fe1F3Fe;
	'1F3FE-1F3FF'?: N1F3Fe1F3Ff;
	'1F3FF-1F3FB'?: N1F3Ff1F3Fb;
	'1F3FF-1F3FC'?: N1F3Ff1F3Fc;
	'1F3FF-1F3FD'?: N1F3Ff1F3Fd;
	'1F3FF-1F3FE'?: N1F3Ff1F3Fe;
	'1F3FF-1F3FF'?: N1F3Ff1F3Ff;
}

export interface N1F3Fb {
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
	obsoleted_by?: string;
	obsoletes?: string;
}

export interface N1F3Fc {
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
	obsoleted_by?: string;
	obsoletes?: string;
}

export interface N1F3Fd {
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
	obsoleted_by?: string;
	obsoletes?: string;
}

export interface N1F3Fe {
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
	obsoleted_by?: string;
	obsoletes?: string;
}

export interface N1F3Ff {
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
	obsoleted_by?: string;
	obsoletes?: string;
}

export interface N1F3Fb1F3Fb {
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

export interface N1F3Fb1F3Fc {
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

export interface N1F3Fb1F3Fd {
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

export interface N1F3Fb1F3Fe {
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

export interface N1F3Fb1F3Ff {
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

export interface N1F3Fc1F3Fb {
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

export interface N1F3Fc1F3Fc {
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

export interface N1F3Fc1F3Fd {
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

export interface N1F3Fc1F3Fe {
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

export interface N1F3Fc1F3Ff {
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

export interface N1F3Fd1F3Fb {
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

export interface N1F3Fd1F3Fc {
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

export interface N1F3Fd1F3Fd {
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

export interface N1F3Fd1F3Fe {
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

export interface N1F3Fd1F3Ff {
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

export interface N1F3Fe1F3Fb {
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

export interface N1F3Fe1F3Fc {
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

export interface N1F3Fe1F3Fd {
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

export interface N1F3Fe1F3Fe {
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

export interface N1F3Fe1F3Ff {
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

export interface N1F3Ff1F3Fb {
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

export interface N1F3Ff1F3Fc {
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

export interface N1F3Ff1F3Fd {
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

export interface N1F3Ff1F3Fe {
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

export interface N1F3Ff1F3Ff {
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
