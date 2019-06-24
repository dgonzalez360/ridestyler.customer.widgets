<div class="psc-widget">
	<form id="psc-form">
		<div class="psc-tm-wrap">
			<h2 class="psc-h2 psc-select-header">Tire Measurements</h2><span class="psc-loading"></span>

			<p>Enter the sizing information for your current tire:</p>

			<div class="psc-input-group psc-input-select-group">
				<span class="psc-first-input">
					<select class="psc-firsti psc-select" id="psc-first0" name="psc-first0" disabled></select>
				</span>
				<span class="psc-second-input">
					<select class="psc-secondi psc-select" id="psc-second0" name="psc-second0" disabled></select>
				</span>
				<span class="psc-third-input">
					<select class="psc-thirdi psc-select" id="psc-third0" name="psc-third0" disabled></select>
				</span>
			</div>

			<div class="psc-input-group psc-input-radio-group">
				<label class="psc-radio psc-inline">
					<input checked="checked" id="psc-sizetype1-0" name="psc-sizetype1" type="radio" value="metric" class="psc-sizetype" /> Metric
				</label>
				<label class="psc-radio psc-inline">
					<input id="psc-sizetype1-1" name="psc-sizetype1" type="radio" value="flotation" class="psc-sizetype" /> Flotation
				</label>
			</div>
		</div>

		<div class="psc-ctm-wrap">
			<h2 class="psc-h2 psc-select-header">Comparison Tire Measurements</h2><span class="psc-loading"></span>

			<p>Enter the sizing information for your comparison tire:</p>

			<div class="psc-input-group psc-input-select-group">
				<span class="psc-first-input">
					<select class="psc-firsti psc-select" id="psc-first1" name="psc-first1" disabled></select>
				</span>
				<span class="psc-second-input">
					<select class="psc-secondi psc-select" id="psc-second1" name="psc-second1" disabled></select>
				</span>
				<span class="psc-third-input">
					<select class="psc-thirdi psc-select" id="psc-third1" name="psc-third1" disabled></select>
				</span>
			</div>

			<div class="psc-input-group psc-input-radio-group">
				<label class="psc-radio psc-inline">
					<input checked="checked" id="psc-sizetype2-0" name="psc-sizetype2" type="radio" value="metric" class="psc-sizetype1" /> Metric
				</label>
				<label class="psc-radio psc-inline">
					<input id="psc-sizetype2-1" name="psc-sizetype2" type="radio" value="flotation" class="psc-sizetype1" /> Flotation
				</label>
			</div>
		</div>

		<div class="psc-clear"></div>

		<div class="psc-ts-wrap">
			<h2 class="psc-h2">Tire Specifications</h2>
			<p>Physical differences between Tire 1 and Tire 2</p>
			<table class="psc-table psc-ts-table" id="psc-ts-table">
				<thead>
					<tr>
						<th class="psc-image">&nbsp;</th>
						<th>&nbsp;</th>
						<th>Tire 1</th>
						<th>Tire 2</th>
						<th class="psc-diff-header">Difference</th>
					</tr>
				</thead>
				<tbody>
					<tr id="psc-diameter-row">
						<td class="psc-image"><i class="psc-sprite psc-diameter"></i></td>
						<td><span class="psc-title">Diameter</span><span class="psc-exp">Inch</span></td>
						<td><span class="psc-value psc-tire1"></span></td>
						<td><span class="psc-value psc-tire2"></span></td>
						<td><span class="psc-value psc-diff"></span></td>
					</tr>
					<tr id="psc-width-row">
						<td class="psc-image"><i class="psc-sprite psc-width"></i></td>
						<td><span class="psc-title">Width</span><span class="psc-exp">Inch</span></td>
						<td><span class="psc-value psc-tire1"></span></td>
						<td><span class="psc-value psc-tire2"></span></td>
						<td><span class="psc-value psc-diff"></span></td>
					</tr>
					<tr id="psc-sidewall-row">
						<td class="psc-image"><i class="psc-sprite psc-sidewall"></i></td>
						<td><span class="psc-title">Sidewall</span><span class="psc-exp">Inch</span></td>
						<td><span class="psc-value psc-tire1"></span></td>
						<td><span class="psc-value psc-tire2"></span></td>
						<td><span class="psc-value psc-diff"></span></td>
					</tr>
					<tr id="psc-circumference-row">
						<td class="psc-image"><i class="psc-sprite psc-circumference"></i></td>
						<td><span class="psc-title">Circumference</span><span class="psc-exp">Inch</span></td>
						<td><span class="psc-value psc-tire1"></span></td>
						<td><span class="psc-value psc-tire2"></span></td>
						<td><span class="psc-value psc-diff"></span></td>
					</tr>
					<tr id="psc-revsmile-row">
						<td class="psc-image"><i class="psc-sprite psc-revsmile"></i></td>
						<td><span class="psc-title">Revs / Mile</span></td>
						<td><span class="psc-value psc-tire1"></span></td>
						<td><span class="psc-value psc-tire2"></span></td>
						<td><span class="psc-value psc-diff"></span></td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="psc-tsd-wrap">
			<h2 class="psc-h2">Tire Speed Difference (Mph)</h2>
			<p>Driving speed for Tire 1 vs Driving speed for Tire 2</p>
			<table class="psc-table psc-tsd-table" id="psc-tsd-table">
				<thead>
					<tr>
						<th>Tire 1</th>
						<th></th>
						<th>Tire 2</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="tire-1"><span class="psc-value psc-tire1"></span></td>
						<td class="vs">vs</td>
						<td class="tire-2"><span class="psc-value"></span></td>
					</tr>
					<tr>
						<td class="tire-1"><span class="psc-value psc-tire1"></span></td>
						<td class="vs">vs</td>
						<td class="tire-2"><span class="psc-value"></span></td>
					</tr>
					<tr>
						<td class="tire-1"><span class="psc-value psc-tire1"></span></td>
						<td class="vs">vs</td>
						<td class="tire-2"><span class="psc-value"></span></td>
					</tr>
					<tr>
						<td class="tire-1"><span class="psc-value psc-tire1"></span></td>
						<td class="vs">vs</td>
						<td class="tire-2"><span class="psc-value"></span></td>
					</tr>
					<tr>
						<td class="tire-1"><span class="psc-value psc-tire1"></span></td>
						<td class="vs">vs</td>
						<td class="tire-2"><span class="psc-value"></span></td>
					</tr>
					<tr>
						<td class="tire-1"><span class="psc-value psc-tire1"></span></td>
						<td class="vs">vs</td>
						<td class="tire-2"><span class="psc-value"></span></td>
					</tr>
					<tr>
						<td class="tire-1"><span class="psc-value psc-tire1"></span></td>
						<td class="vs">vs</td>
						<td class="tire-2"><span class="psc-value"></span></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="psc-clear"></div>
		<input id="psc-form-submit"  type="submit">
	</form>
</div>
