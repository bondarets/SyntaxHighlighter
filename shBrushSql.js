/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var funcs    =	'abs avg case cast coalesce convert count ' +
						'current_user day isnull left lower month nullif replace right ' +
						'session_user space substring sum system_user upper user year ' +
						'asc desc power nvl greatest least decode trim rtrim ltrim instr coalesce ' +
                                                'char varchar2 varchar nchar nvarchar2 date boolean bigint smallint ' + 
						'clob nclob blob long raw bfile integer pls_integer decimal timestamp ' +
						'number float double binary binary_float binary_double date rowid xmltype';

		var keywords =	'declare begin absolute action add after alter as at authorization ' +
						'bit by cascade character check checkpoint close collate ' +
						'column commit committed connect connection constraint contains continue ' +
						'create cube current current_date current_time cursor database ' +
						'deallocate dec default delete distinct drop dynamic ' +
						'else elsif end end-exec escape except exception exec execute exit false fetch ' +
						'first for force foreign forward free from full function global goto grant ' +
						'group grouping having hour ignore index inner insensitive insert instead ' +
						'int intersect into is isolation key last level load local max min ' +
						'minute modify move name national next no numeric of off on only ' +
						'open option order out output partial password precision prepare primary ' +
						'prior privileges procedure public read real references relative repeatable ' +
						'restrict result return returns revoke rollback rollup rows rule schema scroll ' +
						'second section select sequence serializable set size static ' +
						'statistics table temp temporary then time to top transaction ' +
						'translation trigger true truncate uncommitted union unique update values ' +
						'varying view when where with work type rowtype ' + 
                                                'and loop alter system all any between cross in join like not null or outer some';

		var codewords =	'sysdate systimestamp current_timestamp rownum to_date to_char ' + 
				'dbms_output dbms_session dbms_xmlgen dbms_debug dbms_sql dbms_job dbms_metadata dbms_trace';

		this.regexList = [
			{ regex: /--(.*)$/gm,							css: 'comments' },	// one line and multiline comments
			{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString,	css: 'string' },	// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.multiLineSingleQuotedString,	css: 'string' },	// single quoted strings
			{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),			css: 'color2' },	// functions
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),			css: 'keyword' },	// keyword
                        { regex: new RegExp(this.getKeywords(codewords), 'gmi'),		css: 'script' }		// codewords
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['sql'];

	SyntaxHighlighter.brushes.Sql = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();

