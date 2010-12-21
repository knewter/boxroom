// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
function show_permissions()
{
	Effect.BlindUp('files_and_folders');
	Effect.BlindDown('permissions', { delay: 1.0 });
	$('hide_permissions_link').toggle();
	$('show_permissions_link').toggle();
}

function hide_permissions()
{
	Effect.BlindUp('permissions');
	Effect.BlindDown('files_and_folders', { delay: 1.0 });
	$('hide_permissions_link').toggle();
	$('show_permissions_link').toggle();
}